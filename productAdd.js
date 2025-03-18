import mongoose from "mongoose";
import Product from "./app/models/productModel.js";



// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/ecom-assignment', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB connected for seeding"))
  .catch(err => console.log(err));

const products = [
  {
    name: "Industrial Drill Machine",
    price: 199.99,
    image: "https://th.bing.com/th/id/OIP.CX-42ESaD33VArFsC4lFAgHaHa?w=195&h=195&c=7&r=0&o=5&dpr=1.3&pid=1.7 ",
    description: "High power drill machine for industrial use.",
    stock: 10
  },
  {
    name: "Heavy Duty Welding Machine",
    price: 349.99,
    image: "https://th.bing.com/th/id/OIP.BpPChx_bjIFAvKck3hKa3gHaHa?w=204&h=204&c=7&r=0&o=5&dpr=1.3&pid=1.7 ",
    description: "Welding machine with advanced features.",
    stock: 5
  },
  {
    name: "Hydraulic Press",
    price: 499.99,
    image: "https://th.bing.com/th/id/OIP.ssta9uwmecu1uZx25_h67AHaIg?w=171&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7 ",
    description: "Powerful hydraulic press for various applications.",
    stock: 3
  }
];

// Insert products into the database
const seedProducts = async () => {
  try {
    await Product.deleteMany(); // Clears existing products
    await Product.insertMany(products);
    console.log("Dummy products added!");
    mongoose.connection.close(); // Close the DB connection
  } catch (error) {
    console.error("Error seeding products:", error);
    mongoose.connection.close();
  }
};

seedProducts();
