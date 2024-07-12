using Microsoft.EntityFrameworkCore;
using Models;

namespace Repositories {

    public class OrderRepository : IOrderRepository {

        private readonly OrderContext _context;

        public OrderRepository(OrderContext context) {
            _context = context;
        }

        public async Task<IEnumerable<Order>> GetAllOrdersAsync() {
            return await _context.Order.ToListAsync();
        }

        public async Task<Models.Order> GetOrderByIdAsync(long id) {
            return await _context.Order.FindAsync(id);
        }

        public async Task AddOrderAsync(Order order) {
            _context.Order.Add(order);
            await _context.SaveChangesAsync();
        }
        public async Task UpdateOrderAsync(Order order) {
            _context.Entry(order).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }

        public async Task DeleteOrderAsync(long id) {
            var order = await _context.Order.FindAsync(id);
            if (order != null) {
                _context.Order.Remove(order);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<bool> OrderExistsAsync(long id) {
            return await _context.Order.AnyAsync(e => e.Id == id);
        }

        public async Task BulkAddOrdersAsync(IEnumerable<Order> order) {
            await _context.Order.AddRangeAsync(order);
            await _context.SaveChangesAsync();
        }
    } 
}