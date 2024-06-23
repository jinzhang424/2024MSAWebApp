using Microsoft.EntityFrameworkCore;

public class MilkTeaContext : DbContext {
    public MilkTeaContext(DbContextOptions<MilkTeaContext> options) : base(options) {

    }

    public DbSet<Models.MilkTea> MilkTea { get; set; } = default!;
}