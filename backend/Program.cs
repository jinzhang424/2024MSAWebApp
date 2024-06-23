using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

if (builder.Environment.IsDevelopment())
{
    builder.Services.AddDbContext<MilkTeaContext>(options =>
        options.UseInMemoryDatabase("MilkTea"));
}
else
{
    builder.Services.AddDbContext<MilkTeaContext>(options =>
        options.UseSqlServer(builder.Configuration.GetConnectionString("MilkTeaContext") ?? throw new InvalidOperationException("Connection string 'MilkTeaContext' not found.")));
}



app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();


