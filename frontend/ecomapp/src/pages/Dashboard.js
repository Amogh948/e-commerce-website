import { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [products, setProducts] = useState([]);
  const { addToCart, cart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    } else {
      axios
        .get("http://localhost:3050/products", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => setProducts(res.data))
        .catch((err) => console.error(err));
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token")
    navigate("/login")
  };

  return (
    <div className="dashboard-container">
      <button className="logout-btn" onClick={handleLogout}>
      🚪 Logout
      </button>

      <button className="cart-button" onClick={() => navigate("/cart")}>
        🛒 Cart ({cart.length})
      </button>

      <h1>Product Dashboard</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product._id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>₹{product.price}</p>
            <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
