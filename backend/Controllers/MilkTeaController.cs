using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Models;
using Repositories;

namespace backend.Controllers {

    [ApiController]
    [Route("api/[controller]")]

    public class MilkTeaController : ControllerBase {
        private readonly IMilkTeaRepository milkTeaRepository;

        public MilkTeaController(IMilkTeaRepository repository) {
            milkTeaRepository = repository;
        }

        //GET all milk teas
        [HttpGet]
        public async Task<ActionResult<IEnumerable<MilkTea>>> GetMilkTeas() {
            
            var milkTeas = await milkTeaRepository.GetAllMilkTeasAsync();
            return Ok(milkTeas);
        }

        //GET milk tea by id
        [HttpGet("{id}")]
        public async Task<ActionResult<MilkTea>> GetMilkTea(long id) {
            
            var milkTea = await milkTeaRepository.GetMilkTeaByIdAsync(id);

            if (milkTea == null) {
                return NotFound();
            }

            return Ok(milkTea);
        }

        //PUT: updates/alters a milkTea by id
        [HttpPut("{id}")]
        public async Task<ActionResult<MilkTea>> PutMilkTea(long id, MilkTea milkTea) {
            
            if (id != milkTea.Id) {
                return BadRequest();
            }

            try {
                await milkTeaRepository.UpdateMilkTeaAsync(milkTea);
            }
            catch (DbUpdateConcurrencyException) {
                if (!await milkTeaRepository.MilkTeaExistsAsync(id)) {
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
        public async Task<ActionResult<MilkTea>> PostMilkTea(MilkTea milkTea) {
            
            await milkTeaRepository.AddMilkTeaAsync(milkTea);
            return CreatedAtAction("GetMilkTea", new {id = milkTea.Id}, milkTea);
        }

        //DELETE: Delete a milk tea
        [HttpDelete("{id}")]
        public async Task<ActionResult<MilkTea>> DeleteMilkTea(long id) {
            
            var milkTea = await milkTeaRepository.GetMilkTeaByIdAsync(id);
            if (milkTea == null) {
                return NotFound();
            }

            await milkTeaRepository.DeleteMilkTeaAsync(id);

            return NoContent();
        }

        //POST: Create milk teas by bulk
        [HttpPost("bulk")]
        public async Task<ActionResult<MilkTea>> BulkCreateMilkTea(IEnumerable<MilkTea> milkTeas) {
            
            if (milkTeas == null || !milkTeas.Any()) {
                
                return BadRequest("MilkTea data is required.");
            }

            await milkTeaRepository.BulkAddMilkTeasAsync(milkTeas);

            return Ok(milkTeas);
        }
    }
}