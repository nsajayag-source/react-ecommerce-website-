import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';
import FeaturedCarousel from '../Components/FeaturedCarousel';
import { useCart } from '../Context/CartContext';
import './Home.css';

function Home() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [scrollPosition, setScrollPosition] = useState(0);
  const [loading, setLoading] = useState(true);
  const [wishlist, setWishlist] = useState([]);
  const { addToCart } = useCart();

  const products = [
    { id: 1, name: 'Electronics Starts from', price: 666, image: '/images/ele1.jpg', category: 'electronics' },
    { id: 2, name: 'Fashion Starts from', price: 99, image: '/images/shoe1.jpg', category: 'fashion' },
    { id: 3, name: 'Home decors Starts from', price: 79, image: '/images/chair1.jpg', category: 'home decor' },
    { id: 4, name: 'Books Starts from', price: 49, image: '/images/novel1.jpg', category: 'books' },
    { id: 5, name: 'Sports Starts from', price: 99, image: '/images/cricket1.jpg', category: 'sports' },
    { id: 6, name: 'Beauty Starts from', price: 49, image: '/images/cream1.jpg', category: 'beauty' },
  ];

  const deals = [
    { id: 1, name: 'Headphone', price: 1499, image: '/images/headphone.jpg', discount: '40% OFF', category: 'electronics', rating: 4.5, reviews: 120 },
    { id: 2, name: 'Bluetooth Speaker', price: 1699, image: '/images/bluetoothspkr.jpg', discount: '35% OFF', category: 'electronics', rating: 4.3, reviews: 89 },
    { id: 3, name: 'Shoes', price: 799, image: '/images/shoe1.jpg', discount: '50% OFF', category: 'fashion', rating: 4.7, reviews: 210 },
    { id: 4, name: 'Chair', price: 599, image: '/images/chair1.jpg', discount: '25% OFF', category: 'home decor', rating: 4.2, reviews: 67 },
    { id: 5, name: 'Cricket Kit', price: 1499, image: '/images/cricket1.jpg', discount: '30% OFF', category: 'sports', rating: 4.6, reviews: 145 },
    { id: 6, name: 'Face Cream', price: 299, image: '/images/cream1.jpg', discount: '20% OFF', category: 'beauty', rating: 4.4, reviews: 98 },
  ];

  const trending = [
    { id: 1, name: 'Wireless Earbuds', price: 799, image: '/images/earbuds.jpg', category: 'electronics' },
    { id: 2, name: 'Running Shoes', price: 799, image: '/images/shoe1.jpg', category: 'fashion' },
    { id: 3, name: 'Office Chair', price: 1499, image: '/images/chair1.jpg', category: 'home decor' }
  ];

  const categories = [
    { name: 'electronics', image: '/images/ele1.jpg' },
    { name: 'fashion', image: '/images/shoe1.jpg' },
    { name: 'home decor', image: '/images/chair1.jpg' },
    { name: 'books', image: '/images/novel1.jpg' },
    { name: 'sports', image: '/images/cricket1.jpg' },
    { name: 'beauty', image: '/images/cream1.jpg' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition(prev => (prev + 1) % (deals.length * 220));
    }, 30);
    return () => clearInterval(interval);
  }, [deals.length]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  const handleAddToCart = (deal) => {
    addToCart(deal);
    toast.success(`✓ ${deal.name} added to cart!`, {
      duration: 2000,
      position: 'top-right',
      style: {
        background: '#16a34a',
        color: '#fff',
        fontWeight: '600',
      },
    });
  };

  const toggleWishlist = (id) => {
    setWishlist(prev => 
      prev.includes(id) 
        ? prev.filter(itemId => itemId !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="container">
      <Toaster />
      <div className="free-shipping">
        🚚 Free Shipping over ₹999
      </div>

      <div className="search-container">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          placeholder="Search for products..."
          value={searchTerm}
          className="search-input"
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && searchTerm.trim() !== '') {
              const matchedCategory = categories.find(cat => 
                cat.name.toLowerCase().includes(searchTerm.toLowerCase())
              );
              if (matchedCategory) {
                navigate(`/category/${encodeURIComponent(matchedCategory.name)}`);
                setSearchTerm('');
              }
            }
          }}
        />
      </div>

      <div className="main-grid">
        <div className="left-column">
          <div className="category-grid">
            {loading ? (
              Array(6).fill(0).map((_, i) => (
                <div key={i} className="skeleton skeleton-card"></div>
              ))
            ) : (
              categories
                .filter(cat => cat.name.toLowerCase().includes(searchTerm.toLowerCase()))
                .map(cat => (
                <div
                  key={cat.name}
                  className="category-card"
                >
                  <img src={cat.image} alt={cat.name} className="category-image" />
                  <div className="category-name">{cat.name}</div>
                  <button 
                    className="shop-button"
                    onClick={() => navigate(`/category/${encodeURIComponent(cat.name)}`)}
                  >
                    View Category →
                  </button>
                </div>
              ))
            )}
          </div>

          <div className="trending-box">
            <h4 className="trending-title">🔥 Trending Now</h4>
            {trending.map((item, idx) => (
              <div 
                key={idx} 
                onClick={() => navigate(`/category/${encodeURIComponent(item.category)}`)}
                className="trending-item"
                style={{borderBottom: idx < trending.length-1 ? '1px solid #fed7aa' : 'none'}}
              >
                <img src={item.image} alt={item.name} className="trending-image" />
                <div style={{ flex: 1 }}>
                  <div className="trending-name">{item.name}</div>
                  <div className="trending-price">₹{item.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="right-column">
          <div className="carousel-box">
            <FeaturedCarousel products={products} />
          </div>
          
          <div className="info-box">
            <div className="info-grid">
              <div className="info-item">
                <span className="info-icon">✓</span>
                <div>
                  <div className="info-title">Free Delivery</div>
                  <div className="info-desc">On orders above ₹999</div>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">↻</span>
                <div>
                  <div className="info-title">Easy Returns</div>
                  <div className="info-desc">7 day return policy</div>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">🔒</span>
                <div>
                  <div className="info-title">Secure Payment</div>
                  <div className="info-desc">100% secure checkout</div>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">🎧</span>
                <div>
                  <div className="info-title">24/7 Support</div>
                  <div className="info-desc">Always here to help</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="deals-container">
        <div className="deals-header">
          <h3 className="deals-title">⚡ Live Deals - Limited Time!</h3>
          <div className="live-badge">LIVE</div>
        </div>
        <div className="deals-scroll" style={{transform: `translateX(-${scrollPosition}px)`}}>
          {[...deals, ...deals].map((deal, idx) => (
            <div 
               key={idx} 
               className="deal-card"
                onClick={() => navigate(`/product/${deal.id}`)}  
            >
              <div className="deal-image-box">
                <img src={deal.image} alt={deal.name} className="deal-image" />
                <div className="discount-badge">{deal.discount}</div>
                <button 
                  className="wishlist-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleWishlist(deal.id);
                  }}
                >
                  {wishlist.includes(deal.id) ? '❤️' : '🤍'}
                </button>
              </div>
              <div className="deal-name">{deal.name}</div>
              <div className="deal-rating">
                ⭐ {deal.rating} ({deal.reviews})
              </div>
              <div className="deal-price">₹{deal.price}</div>
              <button 
                className="shop-button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleAddToCart(deal);
                }}
              >
                Add to Cart +
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="banner-grid">
        <div onClick={() => navigate('/category/electronics')} className="banner-card" style={{background: 'url(https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800) center/cover'}}>
          <div className="banner-overlay"></div>
          <div className="banner-content">
            <div className="banner-title">📱 Mobiles</div>
            <div className="banner-subtitle">Starting ₹9,999</div>
          </div>
        </div>
        <div onClick={() => navigate('/category/sports')} className="banner-card" style={{background: 'url(https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800) center/cover'}}>
          <div className="banner-overlay"></div>
          <div className="banner-content">
            <div className="banner-title">⚽ Sports</div>
            <div className="banner-subtitle">Starting ₹399</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;