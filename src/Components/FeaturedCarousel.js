import { useState, useEffect, useRef } from 'react';

function FeaturedCarousel({ products }) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    if (!products || products.length === 0) return;

    if (timerRef.current) clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      setIndex(prev => (prev + 1) % products.length);
    }, 3000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products.length]);

  if (!products || products.length === 0) {
    return <div style={{height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>Loading...</div>;
  }

  const product = products[index];

  return (
    <div style={{
      width: '100%',
      height: '100%',
      padding: '20px',
      backgroundColor: '#e6ebf7',
      borderRadius: '10px',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid #ddd'
    }}>
      <h3 style={{ margin: '0 0 10px 0' }}>Featured</h3>
      <img
        src={product.image}
        alt={product.name}
        style={{ width: '100%', maxHeight: '120px', objectFit: 'contain', marginBottom: '10px' }}
        onError={(e) => { e.target.src = 'https://via.placeholder.com/150'; }}
      />
      <p style={{ fontWeight: 'bold', margin: '5px 0', fontSize: '14px' }}>{product.name}</p>
      <p style={{ fontWeight: 'bold', color: '#16a34a', margin: '5px 0', fontSize: '18px' }}>₹{product.price}</p>
    </div>
  );
}

export default FeaturedCarousel;