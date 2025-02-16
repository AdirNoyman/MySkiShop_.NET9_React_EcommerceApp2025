using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class BasketController(StoreContext context) : BaseApiController
    {

        [HttpGet]
        public async Task<ActionResult<Basket>> GetBasket()
        {
            var basket = await context.Baskets.Include(basket => basket.BasketItems)
                .ThenInclude(item => item.Product)
                .FirstOrDefaultAsync(basket => basket.BasketId == Request.Cookies["basketId"]);

            // We will get the basket Id from the user's cookie he sent us via the request and if we can't find the basket we will return 'no content'
            if (basket == null) return NoContent();

            return basket;

        }

        [HttpPost]
        public async Task<ActionResult> AddItemToBasket(int productId, int quantity)
        {
           // Get the client basket

           // If there is no basket, create a new one

           // Get the product the client wants to add to the basket

           // Add the Item (product + quantity) to basket

           // Save the changes

           // Return a response back to client
        }

        [HttpDelete]
        public async Task<ActionResult> RemoveItemFromBasket(int productId, int quantity)
        {
            // Get the client basket

            // If there is no basket, return 'no content'
            
            // Remove the item from the basket or just reduce the quantity

            // Save the changes

            // Return a response back to client
        }

    }
}