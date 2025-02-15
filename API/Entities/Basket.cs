using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entities
{
    public class Basket
    {
        public int Id { get; set; }
        // This will be used to store the user's basket id in Local Storage
        public required string BasketId { get; set; }
        // 1 Basket can be related to 1 Product or more
        public List<BasketItem> BasketItems { get; set; } = [];

        public void AddItem(Product product, int quantity)
        {
            // Check if there is a product to add, and if not or the quantity is is equal to zero or less, throw an exception and break out of the method
            if (product == null) ArgumentNullException.ThrowIfNull(product);
            if (quantity <= 0) throw new ArgumentException("Quantity must be greater than 0", nameof(quantity));

            var existingItem = FindItem(product.Id);

            if (existingItem != null)
            {
                // If the product already exists in the basket, increment the quantity
                existingItem.Quantity += quantity;
            }
            else
            {
                // If the product does not exist in the basket, add it
                BasketItems.Add(new BasketItem
                {
                    Product = product,
                    Quantity = quantity
                });
            }
        }

        public void RemoveItem(int productId, int quantity)
        {
            if (quantity <= 0) throw new ArgumentException("Quantity must be greater than 0", nameof(quantity));

            var itemToRemove = FindItem(productId);

            if (itemToRemove == null)return;

            itemToRemove.Quantity -= quantity;

            if (quantity <= 0)
            {
                BasketItems.Remove(itemToRemove);
            }          
      
        }
        

        private BasketItem? FindItem(int productId)
        {
            // If the product is not found, return null
            return BasketItems.FirstOrDefault(item => item.ProductId == productId);
        }
    }
}