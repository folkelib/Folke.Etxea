using System;
using System.Threading.Tasks;
using Folke.CsTsService;
using Folke.Elm;
using Folke.Elm.Sqlite;
using Folke.Identity.Elm;
using Folke.Etxea.Data;
using Folke.Etxea.Services;
using Folke.Etxea.ViewModels;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Localization;
using Microsoft.AspNetCore.Mvc.Formatters;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Newtonsoft.Json.Serialization;
using Folke.Forum;
using Folke.Forum.Service;
using Microsoft.AspNetCore.Mvc.Controllers;
using System.Linq;
using Folke.Identity.Server;

namespace Folke.Etxea
{
    public class Startup
    {
        public Startup(IHostingEnvironment hostingEnvironment)
        {
            var configurationBuilder = new ConfigurationBuilder();
            configurationBuilder.SetBasePath(hostingEnvironment.ContentRootPath).AddJsonFile("appsettings.json");
            configurationBuilder.AddCommandLine(new string[] { });
            Configuration = configurationBuilder.Build();
        }

        public IConfigurationRoot Configuration { get; set; }

        // This method gets called by a runtime.
        // Use this method to add services to the container
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddIdentity<Account, Role>(options =>
            {
                options.Password = new PasswordOptions
                {
                    RequireDigit = false,
                    RequiredLength = 6,
                    RequireLowercase = false,
                    RequireNonAlphanumeric = false,
                    RequireUppercase = false
                };
            }).AddDefaultTokenProviders();
            
            services.AddMvc(options =>
            {
                var jsonOutputFormatter = new JsonOutputFormatter
                {
                    SerializerSettings = {ContractResolver = new CamelCasePropertyNamesContractResolver()}
                };
                options.OutputFormatters.Insert(0, jsonOutputFormatter);
            })
                .AddIdentityServer<int, Account, AccountViewModel, Role, RoleViewModel>()
                .AddForum< Account, AccountViewModel>();
            
            services.AddAuthorization(options =>
            {
                options.AddPolicy("UserList", policy =>
                {
                    policy.RequireRole("Administrator");
                });
                options.AddPolicy("Role", policy =>
                {
                    policy.RequireRole("Administrator");
                });
                options.AddPolicy("ForumAdministrator", policy =>
                {
                    policy.RequireRole("Administrator");
                });
            });

            services.AddSingleton<IConfiguration>(provider => Configuration) ;
            services.AddSingleton<ConfigurationService>();
            services.AddElm<SqliteDriver>(options =>
            {
                options.ConnectionString = Configuration["Data:IdentityConnection:ConnectionString"];
            });
            services.AddElmIdentity<Account, Role, int>();
            services.AddIdentityServer<Account, int, EmailService, UserService, AccountViewModel>();
            services.AddRoleIdentityServer<Role, RoleService, RoleViewModel>();
            
            services.Configure<FileImageStoreOptions>(options =>
            {
                options.BaseUrl = "http://localhost:5000/upload/";
                options.Path = "wwwroot/upload";
            });
            services.AddForum<Account, AccountViewModel, UserService, FileImageStore>();
        }

        // Configure is called after ConfigureServices is called.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, IFolkeConnection connection, RoleManager<Role> roleManager, UserManager<Account> userManager)
        {
            app.UseIdentity();
            app.UseDefaultFiles();
            app.UseStaticFiles();
            app.UseMvc();
            app.UseRequestLocalization(new RequestLocalizationOptions { DefaultRequestCulture = new RequestCulture("fr-FR")});

            connection.UpdateIdentityUserSchema<int, Account>();
            connection.UpdateIdentityRoleSchema<int, Account>();
            connection.UpdateSchema(typeof (Account).Assembly);
            connection.UpdateForumSchema<Account>();

            CreateAdministrator(roleManager, userManager).GetAwaiter().GetResult();
        }
        
        private static async Task CreateAdministrator(RoleManager<Role> roleManager, UserManager<Account> userManager)
        {
            var administrateur = await roleManager.FindByNameAsync("Administrator");
            if (administrateur == null)
            {
                await roleManager.CreateAsync(new Role {Name = "Administrator"});
            }

            var users = await userManager.GetUsersInRoleAsync("Administrator");
            if (users.Count == 0)
            {
                var result = await userManager.CreateAsync(new Account { UserName = "admin@example.com", Email = "admin@example.com" }, 
                        "changethis");
                if (result.Succeeded)
                {
                    var user = await userManager.FindByNameAsync("admin@example.com");
                    await userManager.AddToRoleAsync(user, "Administrator");
                }
            }
        }
        
        private void CreateTypeScriptServices(IControllerTypeProvider controllerProvider)
        {
            var converter = new Converter(new WaAdapter());
            converter.Write(controllerProvider.ControllerTypes.Select(x => x.AsType()),
                "src/services/services.ts",
                "bower_components/folke-ko-service-helpers/folke-ko-service-helpers",
                "bower_components/folke-ko-validation/folke-ko-validation");
        }
    }
}
