using Models;

namespace Repositories
{
    public interface IMilkTeaOrderRepository
    {
        Task<IEnumerable<MilkTeaOrder>> GetAllMilkTeaOrdersAsync();
        Task<Models.MilkTeaOrder> GetMilkTeaOrderByIdAsync(long id);
        Task AddMilkTeaOrderAsync(MilkTeaOrder milkTeaOrder);
        Task UpdateMilkTeaOrderAsync(MilkTeaOrder milkTeaOrder);
        Task DeleteMilkTeaOrderAsync(long id);
        Task<bool> MilkTeaOrderExistsAsync(long id);
        Task BulkAddMilkTeaOrdersAsync(IEnumerable<MilkTeaOrder> milkTeaOrder);
    }
}