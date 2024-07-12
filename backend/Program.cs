using Microsoft.EntityFrameworkCore;
using Repositories;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Configure DbContext before building the app
if (builder.Environment.IsDevelopment())
{
    builder.Services.AddDbContext<OrderContext>(options =>
        options.UseInMemoryDatabase("Order"));
}
else
{
    builder.Services.AddDbContext<OrderContext>(options =>
        options.UseSqlServer(builder.Configuration.GetConnectionString("OrderContext") ?? throw new InvalidOperationException("Connection string 'OrderContext' not found.")));
}

builder.Services.AddScoped<IOrderRepository, OrderRepository>();

builder.Services.AddCors(options => {
    options.AddPolicy("AllowReactApp",
        policy =>
        {
            policy.WithOrigins("http://localhost:5173")
                  .AllowAnyHeader()
                  .AllowAnyMethod();
        });
});

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Enable CORS
app.UseCors("AllowReactApp");

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();


