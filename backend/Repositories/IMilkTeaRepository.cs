

namespace Repositories
{
    public interface IMilkTeaRepository
    {
        Task<IEnumerable<Models.MilkTea>> GetAllStudentsAsync();
        Task<Models.MilkTea> GetStudentByIdAsync(long id);
        Task AddStudentAsync(Models.MilkTea milkTea);
        Task UpdateStudentAsync(Models.MilkTea milkTea);
        Task DeleteStudentAsync(long id);
        Task<bool> StudentExistsAsync(long id);
        Task BulkAddStudentsAsync(IEnumerable<Models.MilkTea> milkTea);
    }
}