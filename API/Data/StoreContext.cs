using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class StoreContext(DbContextOptions options) : DbContext(options)
    {

        // Define the main tables. The other related tables will be created base on the defined relationships with the this tables
        public required DbSet<Product> Products { get; set; }
        public required DbSet<Basket> Baskets { get; set; }        
    }
}