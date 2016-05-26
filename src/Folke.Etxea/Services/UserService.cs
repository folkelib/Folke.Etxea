using System.Collections.Generic;
using System.Threading.Tasks;
using Folke.Elm;
using Folke.Identity.Server.Services;
using Folke.Identity.Server.Views;
using Folke.Etxea.ViewModels;
using Folke.Etxea.Data;
using Folke.Elm.Fluent;
using Folke.Forum.Service;
using System.Linq;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;

namespace Folke.Etxea.Services
{
    public class UserService : BaseUserService<Account, AccountViewModel>, IForumUserService<Account, AccountViewModel>
    {
        private readonly IFolkeConnection connection;

        public UserService(IFolkeConnection connection, IHttpContextAccessor httpContextAccessor, UserManager<Account> userManager) : base(httpContextAccessor, userManager)
        {
            this.connection = connection;
        }

        public override Task<IList<Account>> Search(UserSearchFilter name, int offset, int limit, string sortColumn)
        {
            return connection.SelectAllFrom<Account>().OrderBy(x => x.UserName).Limit(offset, limit).ToListAsync();
        }

        public override AccountViewModel MapToUserView(Account user)
        {
            if (user == null)
            {
                return new AccountViewModel
                {
                    Logged = false
                };
            }

            return new AccountViewModel
            {
                UserName = user.UserName,
                Email = user.Email,
                EmailConfirmed = user.EmailConfirmed,
                HasPassword = user.PasswordHash != null,
                Id = user.Id,
                Logged = true
            };
        }

        public async Task<bool> IsUser(Account loggedUser, Account accessedUser)
        {
            return loggedUser.Id == accessedUser.Id || await UserManager.IsInRoleAsync(loggedUser, "Administrator");
        }

        public Task<bool> HasRole(Account user, string role)
        {
            return UserManager.IsInRoleAsync(user, role);
        }

        public async Task<IEnumerable<Account>> GetUsersAsync(IEnumerable<AccountViewModel> userViews)
        {
            var keys = userViews.Select(x => x.Id);
            return await connection.SelectAllFrom<Account>().Where(x => keys.Contains(x.Id)).ToListAsync();
        }

        public override Account CreateNewUser(string userName, string email, bool emailConfirmed)
        {
            return new Account
            {
                UserName = userName,
                Email = email,
                EmailConfirmed = emailConfirmed
            };
        }
    }
}
