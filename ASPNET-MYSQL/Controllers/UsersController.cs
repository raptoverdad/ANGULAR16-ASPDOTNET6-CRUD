using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using System.Security.Claims;
using System;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.AspNetCore.Authorization;
using angular_aspnet_crud_docker.models;
namespace angular_aspnet_crud_docker.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly AplicationDbContext _context;
        private readonly IConfiguration _configuration;
        public UsersController(AplicationDbContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }

        // Endpoint para autenticación y obtención del token JWT
        [HttpGet("authenticate")]
        public IActionResult Authenticate()
        {
            var token = GenerateJwtToken();
            return Ok(new { token });
        }
     
        // GET: /Users
        [HttpGet]
        [Authorize]
        public async Task<ActionResult<IEnumerable<User>>> GetUsers()
        {
            try
            {
                return await _context.Users.ToListAsync();
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error en GetUsers: {ex.Message}");
                throw; // Puedes volver a lanzar la excepción si deseas que ASP.NET Core la maneje
            }
        }

        // GET: api/Users/5
        [HttpGet("{name}")]
        [Authorize] // Agrega autorización JWT a este endpoint
        public async Task<ActionResult<User>> GetUserByName(string name)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.name == name);

            if (user == null)
            {
                return NotFound();
            }

            return user;
        }
        [HttpPost]
        [Authorize] // Agrega autorización JWT a este endpoint
        public async Task<ActionResult<User>> CreateUser([FromBody] User user)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var existingUser = await _context.Users.FirstOrDefaultAsync(u => u.name == user.name);

            if (existingUser != null)
            {
                // El usuario ya existe, puedes devolver un BadRequest o manejarlo como desees.
                return BadRequest("El usuario ya existe.");
            }

            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetUserByName), new { name = user.name }, user);
        }
        [HttpDelete("{name}")]
        [Authorize] // Agrega autorización JWT a este endpoint
        public async Task<ActionResult<User>> DeleteUserByName(string name)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.name == name);

            if (user == null)
            {
                return NotFound("El usuario no fue encontrado.");
            }

            _context.Users.Remove(user);
            await _context.SaveChangesAsync();

            return Ok($"El usuario {name} fue eliminado exitosamente.");
        }

        private bool UserExists(int id)
        {
            return _context.Users.Any(e => e.id == id);
        }

        private string GenerateJwtToken()
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(Environment.GetEnvironmentVariable("JWT_SECRET_KEY"));

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
            new Claim(ClaimTypes.Name, "example_user_id")
                }),
                Expires = DateTime.UtcNow.AddDays(1),
                Audience = Environment.GetEnvironmentVariable("Jwt_Audience"),
                Issuer = Environment.GetEnvironmentVariable("Jwt_Issuer"), // Añade la audiencia adecuada aquí
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
    }
}