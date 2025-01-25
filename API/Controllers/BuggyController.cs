using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace API.Controllers
{
    public class BuggyController : BaseApiController
    {
        [HttpGet("not-found")]
        public IActionResult GetNotFoundRequest()
        {
            return NotFound();
        }

        [HttpGet("bad-request")]
        public IActionResult GetBadRequest()
        {
            return BadRequest("This was not a good request");
        }

        [HttpGet("unauthorized")]
        public IActionResult GetUnAuthorizedRequest()
        {
            return Unauthorized();
        }

        [HttpGet("validation-error")]
        public IActionResult GetValidationErrorRequest()
        {
            ModelState.AddModelError("Problem1", "This is error 1");
            ModelState.AddModelError("Problem2", "This is error 2");
            return ValidationProblem();
        }

         [HttpGet("server-error")]
        public IActionResult GetServerErrorRequest()
        {
            // This will produce a 500 server error
            throw new Exception("This is a server error");
        }
    }
}