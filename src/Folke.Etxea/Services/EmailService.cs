using System.Threading.Tasks;
using Folke.Identity.Server.Services;
using Folke.Etxea.Data;

namespace Folke.Etxea.Services
{
    public class EmailService : IUserEmailService<Account>
    {
        public Task SendEmailConfirmationEmail(Account user, string code)
        {
            return Task.FromResult(0);
        }

        public Task SendPasswordResetEmail(Account user, string code)
        {
            return Task.FromResult(0);
        }
    }
}
