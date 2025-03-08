using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.DTOs;
using API.Entities;

namespace API.Extensions
{
    // Extensions of the Basket entity functionality
    public static class BasketExtensions
    {
        // This method will convert a basket entity to a basket DTO
        public static BasketDTO ToDto(this Basket basket)
        {
             return new BasketDTO
            {
                BasketId = basket.BasketId,
                BasketItems = [.. basket.BasketItems.Select(item => new BasketItemDTO
                {
                    ProductId = item.Product.Id,
                    Name = item.Product.Name,
                    Price = item.Product.Price,
                    PictureUrl = item.Product.PictureUrl,
                    Brand = item.Product.Brand,
                    Type = item.Product.Type,
                    Quantity = item.Quantity
                })]
            };
        }
    }
}