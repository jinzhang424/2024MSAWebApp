namespace Models {
    public class Order {
        public long Id { get; set; }
        public string? Name { get; set; }
        public double Price { get; set; }
        public int Sweetness { get; set; }
        public int Temperature { get; set; }
        public string[]? Toppings { get; set; }
    }
}