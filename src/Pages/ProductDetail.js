import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useCart } from '../Context/CartContext';
import './ProductDetail.css';

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  // All products (combine deals + trending for demo)
  const allProducts = [
    { id: 1, name: 'Headphone', price: 1499, image: '/images/headphone.jpg', discount: '40% OFF', rating: 4.5, reviews: 120, description: 'Premium wireless headphones with noise cancellation. 30hr battery life. Crystal clear sound quality.', category: 'electronics' },
    { id: 2, name: 'Bluetooth Speaker', price: 1699, image: '/images/bluetoothspkr.jpg', discount: '35% OFF', rating: 4.3, reviews: 89, description: 'Portable bluetooth speaker with deep bass. Waterproof design. 12hr playtime.', category: 'electronics' },
    { id: 3, name: 'Shoes', price: 799, image: '/images/shoe1.jpg', discount: '50% OFF', rating: 4.7, reviews: 210, description: 'Comfortable running shoes with cushioned sole. Breathable material. Perfect for daily use.', category: 'fashion' },
    { id: 4, name: 'Chair', price: 599, image: '/images/chair1.jpg', discount: '25% OFF', rating: 4.2, reviews: 67, description: 'Ergonomic office chair with lumbar support. Adjustable height. Premium fabric.', category: 'home decor' },
    { id: 5, name: 'Cricket Kit', price: 1499, image: '/images/cricket1.jpg', discount: '30% OFF', rating: 4.6, reviews: 145, description: 'Complete cricket kit for beginners. Includes bat, ball, and stumps. High quality wood.', category: 'sports' },
    { id: 6, name: 'Face Cream', price: 299, image: '/images/cream1.jpg', discount: '20% OFF', rating: 4.4, reviews: 98, description: 'Moisturizing face cream with natural ingredients. Suitable for all skin types.', category: 'beauty' },
  ];

  const product = allProducts.find(p => p.id === parseInt(id));

  if (!product) {
    return <div className="not-found">Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`✓ ${product.name} added to cart!`, {
      duration: 2000,
      position: 'top-right',
      style: {
        background: '#16a34a',
        color: '#fff',
        fontWeight: '600',
      },
    });
  };

  return (
    <div className="product-detail-container">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>
      
      <div className="product-detail-grid">
        <div className="product-image-section">
          <img src={product.image} alt={product.name} className="product-main-image" />
          {product.discount && <div className="product-discount">{product.discount}</div>}
        </div>

        <div className="product-info-section">
          <h1 className="product-title">{product.name}</h1>
          
          <div className="product-rating">
            <span className="stars">⭐ {product.rating}</span>
            <span className="reviews">({product.reviews} reviews)</span>
          </div>

          <div className="product-price">₹{product.price}</div>
          
          <p className="product-description">{product.description}</p>

          <div className="product-features">
            <div className="feature">✓ Free Delivery</div>
            <div className="feature">✓ 7 Day Returns</div>
            <div className="feature">✓ 1 Year Warranty</div>
          </div>

          <div className="action-buttons">
            <button className="add-cart-btn" onClick={handleAddToCart}>
              Add to Cart
            </button>
            <button className="buy-now-btn" onClick={handleAddToCart}>
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;