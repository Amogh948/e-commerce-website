import { useEffect } from "react";
import { useCart } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";


export default function Cart() {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  useEffect(() => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
      }
    }, [navigate]);

  return (
    <div className="cart-container">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div key={item._id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p>Price: ₹{item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
            <button onClick={() => removeFromCart(item._id)} className="remove-btn">
              Remove
            </button>
          </div>
        ))
      )}

      {cart.length > 0 && (
        <div className="total-price">Total Price: ₹{totalPrice.toFixed(2)}</div>
      )}

      <button onClick={() => navigate("/dashboard")} className="back-btn">
        Back to Products
      </button>
    </div>
  );
}
