using Ecommerce.DATA.Model;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ecommerce.Services.Services.Interface
{
    public interface IUserServices
    {
        Task<HttpMessageResponse> LoginWithToken(UserVM model);
        Task LogOut();
        Task<HttpMessageResponse> Registor(RegistorVM model);
        Task<HttpMessageResponse> addRole(RolesVM model);
        Task<IdentityRole> GetRoleByName(string name);
        Task<IList<IdentityRole>> GetAllRole();
    }
}
