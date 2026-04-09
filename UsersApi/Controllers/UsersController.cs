using Microsoft.AspNetCore.Mvc;
using UsersApi.Services;
using UsersApi.Dtos;

namespace UsersApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly UserService _userService;

        public UsersController(UserService userService)
        {
            _userService = userService;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var users = _userService.GetAll();
            return Ok(users);
        }

        [HttpPost]
        public IActionResult Create(CreateUserDto dto)
        {
            var user = _userService.Create(dto.Name);
            return Ok(user);
        }

        [HttpGet("healthcheck")]
        public IActionResult HealthCheck()
        {
            return Ok(new
            {
                status = "Healthy",
                service = "Users API",
                timestamp = DateTime.UtcNow
            });
        }
    }
}