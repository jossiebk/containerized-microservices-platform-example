using Microsoft.AspNetCore.Mvc;
using OrdersApi.Data;
using OrdersApi.Models;

namespace OrdersApi.Controllers;

[ApiController]
[Route("api/orders")]
public class OrdersController : ControllerBase
{
    private readonly AppDbContext _context;

    public OrdersController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public IActionResult Get()
    {
        return Ok(_context.Orders.ToList());
    }

    [HttpPost]
    public IActionResult Create(Order order)
    {
        _context.Orders.Add(order);
        _context.SaveChanges();
        return Ok(order);
    }

    [HttpGet("healthcheck")]
    public IActionResult Healthcheck()
    {
        return Ok(new
        {
            status = "Healthy",
            service = "Orders API"
        });
    }
}