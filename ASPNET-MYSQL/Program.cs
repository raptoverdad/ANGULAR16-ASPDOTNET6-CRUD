using Microsoft.EntityFrameworkCore;
using angular_aspnet_crud_docker;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.Authentication.JwtBearer;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddAuthentication("Bearer")
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            ValidIssuer = Environment.GetEnvironmentVariable("Jwt_Issuer"),
            ValidAudience = Environment.GetEnvironmentVariable("Jwt_Audience"),
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(Environment.GetEnvironmentVariable("JWT_SECRET_KEY")))
        };

        options.Events = new JwtBearerEvents
        {
            OnAuthenticationFailed = context =>
            {
                Console.WriteLine("Authentication failed: " + context.Exception.ToString());
                return Task.CompletedTask;
            }
        };
    });
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
Console.WriteLine("la app funciona");
Console.WriteLine("issuer:"+" "+Environment.GetEnvironmentVariable("Jwt_Issuer"));
Console.WriteLine("audience:" + " " + Environment.GetEnvironmentVariable("Jwt_Audience"));
Console.WriteLine("jwt secret" + " " + Environment.GetEnvironmentVariable("JWT_SECRET_KEY"));
var host = Environment.GetEnvironmentVariable("DBHOST");
var port = "3306";
var password = Environment.GetEnvironmentVariable("MYSQL_PASSWORD");
var userid = Environment.GetEnvironmentVariable("MYSQL_USER");
var usersDataBase = Environment.GetEnvironmentVariable("MYSQL_DATABASE");

var dockerConnString = $"server=mysql-db;user={userid};password={password};database={usersDataBase};";
var localConnString = $"server=localhost;user=root;password=123456;database=angularaspcruddatabase;port=3309";
builder.Services.AddDbContext<AplicationDbContext>(options =>
    options.UseMySql(dockerConnString, ServerVersion.AutoDetect(dockerConnString)));

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowOrigin", builder =>
    {
        builder.AllowAnyOrigin()
               .AllowAnyMethod()
               .AllowAnyHeader();
    });
});

var app = builder.Build();



// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseCors("AllowOrigin");
app.UseHttpsRedirection();
app.UseAuthentication();
app.UseAuthorization();
app.MapControllers();

app.Run();
