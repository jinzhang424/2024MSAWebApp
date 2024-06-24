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
    builder.Services.AddDbContext<MilkTeaContext>(options =>
        options.UseInMemoryDatabase("MilkTea"));
}
else
{
    builder.Services.AddDbContext<MilkTeaContext>(options =>
        options.UseSqlServer(builder.Configuration.GetConnectionString("MilkTeaContext") ?? throw new InvalidOperationException("Connection string 'MilkTeaContext' not found.")));
}

builder.Services.AddScoped<IMilkTeaRepository, MilkTeaRepository>();

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


