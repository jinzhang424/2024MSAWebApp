

namespace Repositories
{
    public interface IMilkTeaRepository
    {
        Task<IEnumerable<Models.MilkTea>> GetAllStudentsAsync();
        Task<Models.MilkTea> GetMilkTeaByIdAsync(long id);
        Task AddMilkTeaAsync(Models.MilkTea milkTea);
        Task UpdateMilkTeaAsync(Models.MilkTea milkTea);
        Task DeleteMilkTeaAsync(long id);
        Task<bool> MilkTeaExistsAsync(long id);
        Task BulkMilkTeasAsync(IEnumerable<Models.MilkTea> milkTea);
    }
}