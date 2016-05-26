using System.IO;
using Folke.CsTsService;
using Microsoft.Extensions.DependencyInjection;
using System.Linq;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc.Controllers;

namespace Folke.Etxea
{
    public class Program
    {
        //private readonly ILibraryManager runtimeServices;
        
        //public Program(ILibraryManager runtimeServices)
        //{
        //    this.runtimeServices = runtimeServices;
        //}

        public static void Main(string[] args)
        {
            var host = new WebHostBuilder()
             .UseKestrel()
             .UseContentRoot(Directory.GetCurrentDirectory())
             .UseIISIntegration()
             .UseStartup<Startup>()
             .Build();

            host.Run();
        }

    }
}
