using Microsoft.EntityFrameworkCore;
using Models;

namespace Repositories {

    public class MilkTeaRepository : IMilkTeaRepository {

        private readonly MilkTeaContext _context;

        public MilkTeaRepository(MilkTeaContext context) {
            _context = context;
        }

        public async Task<IEnumerable<MilkTea>> GetAllMilkTeasAsync() {
            return await _context.MilkTea.ToListAsync();
        }

        public async Task<Models.MilkTea> GetMilkTeaByIdAsync(long id) {
            return await _context.MilkTea.FindAsync(id);
        }

        public async Task AddMilkTeaAsync(MilkTea milkTea) {
            _context.MilkTea.Add(milkTea);
            await _context.SaveChangesAsync();
        }
        public async Task UpdateMilkTeaAsync(MilkTea milkTea) {
            _context.Entry(milkTea).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }

        public async Task DeleteMilkTeaAsync(long id) {
            var milkTea = await _context.MilkTea.FindAsync(id);
            if (milkTea != null) {
                _context.MilkTea.Remove(milkTea);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<bool> MilkTeaExistsAsync(long id) {
            return await _context.MilkTea.AnyAsync(e => e.Id == id);
        }

        public async Task BulkAddMilkTeasAsync(IEnumerable<MilkTea> milkTea) {
            await _context.MilkTea.AddRangeAsync(milkTea);
            await _context.SaveChangesAsync();
        }
    } 
}