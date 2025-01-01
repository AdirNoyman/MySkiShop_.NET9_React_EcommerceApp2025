using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class StoreContext(DbContextOptions options) : DbContext(options)
    {

        // Define the tables
        public required DbSet<Product> Products { get; set; }
    }
}