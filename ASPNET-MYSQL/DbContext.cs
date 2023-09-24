using angular_aspnet_crud_docker.models;
using Microsoft.EntityFrameworkCore;
using System;

namespace angular_aspnet_crud_docker
{
    public class AplicationDbContext: DbContext
    {

        public AplicationDbContext(DbContextOptions<AplicationDbContext> options) : base(options)
        {
            Console.WriteLine("Entrando en el constructor del contexto.");
        }
        //un db set es una tabla de la base de datos
        public DbSet<User> Users { get; set; }
    }
}
