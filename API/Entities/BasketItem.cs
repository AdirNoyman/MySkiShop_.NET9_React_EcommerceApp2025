
using System.ComponentModel.DataAnnotations.Schema;


namespace API.Entities
{
    [Table("BasketItems")]
    public class BasketItem
    {
        public int Id { get; set; }
        public int Quantity { get; set; }

        // Navigation properties
        // 1 BasketItem can only be related to 1 Product
        public int ProductId { get; set; }
        public required Product Product { get; set; }

        // Navigation properties
        // 1 BasketItem can only be related to 1 Basket
        public int BasketId { get; set; }
        public Basket Basket { get; set; } = null!;
    }
}