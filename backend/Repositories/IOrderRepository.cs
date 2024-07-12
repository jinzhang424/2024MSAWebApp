using Models;

namespace Repositories
{
    public interface IOrderRepository
    {
        Task<IEnumerable<Order>> GetAllOrdersAsync();
        Task<Models.Order> GetOrderByIdAsync(long id);
        Task AddOrderAsync(Order order);
        Task UpdateOrderAsync(Order order);
        Task DeleteOrderAsync(long id);
        Task<bool> OrderExistsAsync(long id);
        Task BulkAddOrdersAsync(IEnumerable<Order> order);
    }
}