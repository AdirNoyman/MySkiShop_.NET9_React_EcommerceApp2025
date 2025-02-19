using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.DTOs
{
    public class BasketDTO
    {

        // This will be used to store the user's basket id in Local Storage
        public required string BasketId { get; set; }
        // 1 Basket can be related to 1 Product or more
        public List<BasketItemDTO> BasketItems { get; set; } = [];
    }
}