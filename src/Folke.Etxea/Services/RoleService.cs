using Folke.Identity.Server.Services;
using Folke.Etxea.Data;
using Folke.Etxea.ViewModels;

namespace Folke.Etxea.Services
{
    public class RoleService : IRoleService<Role, RoleViewModel>
    {
        public RoleViewModel MapToRoleView(Role role)
        {
            return new RoleViewModel
            {
                Name = role.Name,
                Id = role.Id
            };
        }

        public Role CreateNewRole(string name)
        {
            return new Role
            {
                Name = name
            };
        }
    }
}
