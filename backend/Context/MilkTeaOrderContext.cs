using Microsoft.EntityFrameworkCore;

public class MilkTeaOrderContext : DbContext {
    public MilkTeaOrderContext(DbContextOptions<MilkTeaOrderContext> options) : base(options) {

    }

    public DbSet<Models.MilkTeaOrder> MilkTeaOrder { get; set; } = default!;
}