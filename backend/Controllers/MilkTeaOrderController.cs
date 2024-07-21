using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Models;
using Repositories;

namespace backend.Controllers {

    [ApiController]
    [Route("api/[controller]")]

    public class MilkTeaOrderController : ControllerBase {
        private readonly IMilkTeaOrderRepository milkTeaOrderRepository;

        public MilkTeaOrderController(IMilkTeaOrderRepository repository) {
            milkTeaOrderRepository = repository;
        }

        //GET all milk tea orders
        [HttpGet]
        public async Task<ActionResult<IEnumerable<MilkTeaOrder>>> GetMilkTeaOrders() {
            
            var milkTeaOrders = await milkTeaOrderRepository.GetAllMilkTeaOrdersAsync();
            return Ok(milkTeaOrders);
        }

        //GET order by id
        [HttpGet("{id}")]
        public async Task<ActionResult<MilkTeaOrder>> GetMilkTeaOrder(long id) {
            
            var milkTeaOrder = await milkTeaOrderRepository.GetMilkTeaOrderByIdAsync(id);

            if (milkTeaOrder == null) {
                return NotFound();
            }

            return Ok(milkTeaOrder);
        }

        //PUT: updates/alters an order by id
        [HttpPut("{id}")]
        public async Task<ActionResult<MilkTeaOrder>> PutOrder(long id, MilkTeaOrder milkTeaOrder) {
            
            if (id != milkTeaOrder.Id) {
                return BadRequest();
            }

            try {
                await milkTeaOrderRepository.UpdateMilkTeaOrderAsync(milkTeaOrder);
            }
            catch (DbUpdateConcurrencyException) {
                if (!await milkTeaOrderRepository.MilkTeaOrderExistsAsync(id)) {
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
        public async Task<ActionResult<MilkTeaOrder>> PostOrder(MilkTeaOrder milkTeaOrder) {
            
            await milkTeaOrderRepository.AddMilkTeaOrderAsync(milkTeaOrder);
            return CreatedAtAction("GetMilkTea", new {id = milkTeaOrder.Id}, milkTeaOrder);
        }

        //DELETE: Delete a milk tea
        [HttpDelete("{id}")]
        public async Task<ActionResult<MilkTeaOrder>> DeleteMilkTeaOrder(long id) {
            
            var milkTeaOrder = await milkTeaOrderRepository.GetMilkTeaOrderByIdAsync(id);
            if (milkTeaOrder == null) {
                return NotFound();
            }

            await milkTeaOrderRepository.DeleteMilkTeaOrderAsync(id);

            return NoContent();
        }

        //POST: Create milk teas by bulk
        [HttpPost("bulk")]
        public async Task<ActionResult<MilkTeaOrder>> BulkCreateMilkTeaOrder(IEnumerable<MilkTeaOrder> milkTeaOrders) {
            
            if (milkTeaOrders == null || !milkTeaOrders.Any()) {
                
                return BadRequest("Order data is required.");
            }

            await milkTeaOrderRepository.BulkAddMilkTeaOrdersAsync(milkTeaOrders);

            return Ok(milkTeaOrders);
        }
    }
}