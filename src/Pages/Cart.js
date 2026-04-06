import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';

function Cart() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (cart.length === 0) {
    return (
      <div style={{ textAlign: 'center', marginTop: '100px' }}>
        <h2>Your cart is empty</h2>
        <button 
          onClick={() => navigate('/')}
          style={{
            marginTop: '20px',
            padding: '12px 24px',
            backgroundColor: '#f59e0b',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          Continue Shopping →
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Your Cart</h2>
      
      {cart.map(item => (
        <div key={item.id} style={{ 
          display: 'flex', 
          alignItems: 'center', 
          border: '1px solid #ddd', 
          padding: '10px', 
          margin: '10px 0',
          borderRadius: '8px'
        }}>
          <img src={item.image} alt={item.name} style={{ width: '100px', height: '100px', objectFit: 'contain' }} />
          <div style={{ marginLeft: '20px', flex: 1 }}>
            <h3>{item.name}</h3>
            <p>Price: ₹{item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Subtotal: ₹{item.price * item.quantity}</p>
          </div>
          <button 
            onClick={() => removeFromCart(item.id)}
            style={{
              padding: '8px 16px',
              backgroundColor: '#ef4444',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer'
            }}
          >
            Remove
          </button>
        </div>
      ))}

      <h3>Total: ₹{totalPrice}</h3>
      <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
        <button 
          onClick={clearCart}
          style={{
            padding: '10px 20px',
            backgroundColor: '#000',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer'
          }}
        >
          Clear Cart
        </button>
        <button 
          onClick={() => {
            alert('Order placed successfully!');
            clearCart();
          }}
          style={{
            padding: '10px 20px',
            backgroundColor: '#10b981',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;