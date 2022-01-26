using System.Security.Claims;

namespace API.Extentsions
{
    public static class ClaimsPrincipleExtensions
    {
        public static string getUserName(this ClaimsPrincipal user) 
        {
            return user.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        }
    }
}