using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Linq;
using Models;
using Microsoft.AspNetCore.Authorization.Infrastructure;

namespace BobaOrderingApp.Data {
    
    public static class OrderSeedData {
        
        public static void Intialize(IServiceProvider serviceProvider) {
            using (var context = new OrderContext(
                serviceProvider.GetRequiredService<DbContextOptions<OrderContext>>())) {
                    
                    if (context.Order.Any()) {
                        return;
                    }

                    context.Order.AddRange(
                        new Order {
                            Id = 1,
                            Name = "Original Milk Tea",
                            Price = 9.90,
                            imgUrl = "https://images.pexels.com/photos/11100423/pexels-photo-11100423.jpeg",
                            imgAlt = "Original Milk Tea Image"
                        },
                        new Order {
                            Id = 2,
                            Name = "Strawberry Milk Tea",
                            Price = 10.00,
                            imgUrl = "https://media.istockphoto.com/id/1213739503/photo/strawberry-bubble-bobba-tea.jpg?s=1024x1024&w=is&k=20&c=KPNWSEHCVG77HeUxjEMZPsWw1qiWjEgxUXVO345raDQ=",
                            imgAlt = "Strawberry Milk Tea Image"
                        },
                        new Order {
                            Id = 3,
                            Name = "Mango Milk Tea",
                            Price = 10.00,
                            imgUrl = "https://media.istockphoto.com/id/2151635779/photo/food-photos-various-entrees-appetizers-deserts-etc.jpg?s=1024x1024&w=is&k=20&c=ggqV_Crhx1FI51StdBTW24hXhInzKom7MEJtYZpNTpM=",
                            imgAlt = "Mango Milk Tea Image"
                        }
                    );

                    context.SaveChanges();
                }
        }
    }
}