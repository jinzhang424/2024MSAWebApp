using Microsoft.EntityFrameworkCore;
using Models;

namespace Repositories {

    public class MilkTeaOrderRepository : IMilkTeaOrderRepository {

        private readonly MilkTeaOrderContext _context;

        public MilkTeaOrderRepository(MilkTeaOrderContext context) {
            _context = context;
        }

        public async Task<IEnumerable<MilkTeaOrder>> GetAllMilkTeaOrdersAsync() {
            return await _context.MilkTeaOrder.ToListAsync();
        }

        public async Task<Models.MilkTeaOrder> GetMilkTeaOrderByIdAsync(long id) {
            return await _context.MilkTeaOrder.FindAsync(id);
        }

        public async Task AddMilkTeaOrderAsync(MilkTeaOrder milkTeaOrder) {
            _context.MilkTeaOrder.Add(milkTeaOrder);
            await _context.SaveChangesAsync();
        }
        public async Task UpdateMilkTeaOrderAsync(MilkTeaOrder milkTeaOrder) {
            _context.Entry(milkTeaOrder).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }

        public async Task DeleteMilkTeaOrderAsync(long id) {
            var milkTeaOrder = await _context.MilkTeaOrder.FindAsync(id);
            if (milkTeaOrder != null) {
                _context.MilkTeaOrder.Remove(milkTeaOrder);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<bool> MilkTeaOrderExistsAsync(long id) {
            return await _context.MilkTeaOrder.AnyAsync(e => e.Id == id);
        }

        public async Task BulkAddMilkTeaOrdersAsync(IEnumerable<MilkTeaOrder> milkTeaOrder) {
            await _context.MilkTeaOrder.AddRangeAsync(milkTeaOrder);
            await _context.SaveChangesAsync();
        }
    } 
}