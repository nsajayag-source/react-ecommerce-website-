import React from 'react';
import { useCart } from '../Context/CartContext';

function ProductCard({ product, showButton = true, compact = false }) {
  const { addToCart } = useCart();

  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: compact ? '10px' : '15px',
      backgroundColor: 'white',
      textAlign: 'center',
      transition: 'transform 0.2s',
      cursor: 'pointer'
    }}
    onMouseEnter={(e) => !compact && (e.currentTarget.style.transform = 'scale(1.03)')}
    onMouseLeave={(e) => !compact && (e.currentTarget.style.transform = 'scale(1)')}
    >
      <img
        src={product.image}
        alt={product.name}
        onError={(e) => { e.target.src = 'https://via.placeholder.com/150'; }}
        style={{ 
          width: '100%', 
          height: compact ? '120px' : '180px', 
          objectFit: 'cover', 
          borderRadius: '6px', 
          marginBottom: '10px' 
        }}
      />
      <h4 style={{ margin: '5px 0', fontSize: compact ? '13px' : '16px' }}>{product.name}</h4>
      <p style={{ fontWeight: 'bold', color: '#16a34a', margin: '5px 0', fontSize: compact ? '14px' : '18px' }}>₹{product.price}</p>
      
      {showButton && (
        <button
          onClick={() => addToCart(product)}
          style={{
            backgroundColor: '#16a34a',
            color: 'white',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '600',
            marginTop: '8px'
          }}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
}

export default ProductCard;