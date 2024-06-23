using Models;

namespace Repositories
{
    public interface IMilkTeaRepository
    {
        Task<IEnumerable<MilkTea>> GetAllStudentsAsync();
        Task<Models.MilkTea> GetMilkTeaByIdAsync(long id);
        Task AddMilkTeaAsync(MilkTea milkTea);
        Task UpdateMilkTeaAsync(MilkTea milkTea);
        Task DeleteMilkTeaAsync(long id);
        Task<bool> MilkTeaExistsAsync(long id);
        Task BulkMilkTeasAsync(IEnumerable<MilkTea> milkTea);
    }
}