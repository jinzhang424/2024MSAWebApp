using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Models;
using Repositories;

namespace backend.Controllers {

    [ApiController]
    [Route("api/[controller]")]

    public class OrderController : ControllerBase {
        private readonly IOrderRepository orderRepository;

        public OrderController(IOrderRepository repository) {
            orderRepository = repository;
        }

        //GET all orders
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Order>>> GetOrders() {
            
            var orders = await orderRepository.GetAllOrdersAsync();
            return Ok(orders);
        }

        //GET order by id
        [HttpGet("{id}")]
        public async Task<ActionResult<Order>> GetOrder(long id) {
            
            var order = await orderRepository.GetOrderByIdAsync(id);

            if (order == null) {
                return NotFound();
            }

            return Ok(order);
        }

        //PUT: updates/alters an order by id
        [HttpPut("{id}")]
        public async Task<ActionResult<Order>> PutOrder(long id, Order order) {
            
            if (id != order.Id) {
                return BadRequest();
            }

            try {
                await orderRepository.UpdateOrderAsync(order);
            }
            catch (DbUpdateConcurrencyException) {
                if (!await orderRepository.OrderExistsAsync(id)) {
                    return NotFound();
                }
                else {
                    throw;
                }
            }

            return NoContent();
        }

        //POST: Create a milk tea
        [HttpPost]
        public async Task<ActionResult<Order>> PostOrder(Order order) {
            
            await orderRepository.AddOrderAsync(order);
            return CreatedAtAction("GetMilkTea", new {id = order.Id}, order);
        }

        //DELETE: Delete a milk tea
        [HttpDelete("{id}")]
        public async Task<ActionResult<Order>> DeleteOrder(long id) {
            
            var order = await orderRepository.GetOrderByIdAsync(id);
            if (order == null) {
                return NotFound();
            }

            await orderRepository.DeleteOrderAsync(id);

            return NoContent();
        }

        //POST: Create milk teas by bulk
        [HttpPost("bulk")]
        public async Task<ActionResult<Order>> BulkCreateOrder(IEnumerable<Order> orders) {
            
            if (orders == null || !orders.Any()) {
                
                return BadRequest("Order data is required.");
            }

            await orderRepository.BulkAddOrdersAsync(orders);

            return Ok(orders);
        }
    }
}