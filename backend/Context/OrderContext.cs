using Microsoft.EntityFrameworkCore;

public class OrderContext : DbContext {
    public OrderContext(DbContextOptions<OrderContext> options) : base(options) {

    }

    public DbSet<Models.Order> Order { get; set; } = default!;
}