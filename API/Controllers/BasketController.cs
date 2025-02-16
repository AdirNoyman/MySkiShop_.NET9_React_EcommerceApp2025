using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class BasketController(StoreContext context) : BaseApiController
    {

        // RetrieveBasket method
        private async Task<Basket?> RetrieveBasket()
        {
            return await context.Baskets.Include(basket => basket.BasketItems)
                .ThenInclude(item => item.Product)
                .FirstOrDefaultAsync(basket => basket.BasketId == Request.Cookies["basketId"]);
        }

        // CreateBasket method
        private Basket CreateBasket()
        {
            // Create Id for the new basket
            var basketId = Guid.NewGuid().ToString();
            // Create cookie with our customized options
            var cookieOptions = new CookieOptions
            {
                // Even if user refuses to accept cookies, we will still create a cookie
                IsEssential = true,
                // Set the expiration date of the cookie for 30 days
                Expires = DateTime.UtcNow.AddDays(30)
            };

            Response.Cookies.Append("basketId", basketId, cookieOptions);

            var basket = new Basket {BasketId = basketId};

            context.Baskets.Add(basket);

            return basket;      
        }


        [HttpGet]
        public async Task<ActionResult<Basket>> GetBasket()
        {
            var basket = await RetrieveBasket();

            // We will get the basket Id from the user's cookie he sent us via the request and if we can't find the basket we will return 'no content'
            if (basket == null) return NoContent();

            return basket;

        }

        [HttpPost]
        public async Task<ActionResult> AddItemToBasket(int productId, int quantity)
        {
            // Get the client basket
            var basket = await RetrieveBasket();

            // If there is no basket (it's null), create a new one
            basket ??= CreateBasket();

            // Get the product the client wants to add to the basket, by looking it up in the database with the primary key
            var product = await context.Products.FindAsync(productId);

            if (product == null) return BadRequest("Problem adding item to basket 😫");

            // Add the Item (product + quantity) to basket
            basket.AddItem(product, quantity);

            // Save the changes to the database
            var result = await context.SaveChangesAsync() > 0;

            // Return a response back to client
            if (result) return CreatedAtAction(nameof(GetBasket), basket);

            // If the result is false, return a bad request
            return BadRequest("Problem updating the basket 😫");
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