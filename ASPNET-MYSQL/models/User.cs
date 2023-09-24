using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace angular_aspnet_crud_docker.models
{
    public class User
    {
        [Key]
        public int id { get; set; }
        [Required]
        [Column(TypeName = "varchar(100)")]
        public string name { get; set; }
        [Required]
        public int age { set; get; }
    }
}
