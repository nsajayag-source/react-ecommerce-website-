import { useParams } from 'react-router-dom';
import ProductCard from '../Components/ProductCard';

function Category() {
  const { name } = useParams();

  const allProducts = [
    // Electronics (10 items)
    { id: 1, name: 'Headphone', price: 1499, image: '/images/headphone.jpg', category: 'electronics' },
    { id: 2, name: 'Bluetooth Speaker', price: 1699, image: '/images/bluetoothspkr.jpg', category: 'electronics' },
    { id: 3, name: 'Wireless Earbuds', price: 799, image: '/images/earbuds.jpg', category: 'electronics' },
    { id: 4, name: 'Laptop', price: 18999, image: '/images/lap1.jpg', category: 'electronics' },
    { id: 5, name: 'Iphone', price: 45999, image: '/images/iphone.jpg', category: 'electronics' },
    { id: 6, name: 'Tablet', price: 6666, image: '/images/tablet.jpg', category: 'electronics' },
    { id: 7, name: 'Home Theater', price: 2199, image: '/images/hometr.jpg', category: 'electronics' },
    { id: 8, name: 'Power Bank', price: 666, image: '/images/powerb.jpg', category: 'electronics' },
    { id: 9, name: 'Phone', price: 9999, image: '/images/phone1.jpg', category: 'electronics' },
    { id: 10, name: 'Camera', price: 9999, image: '/images/camera.jpg', category: 'electronics' },
    // Fashion (10 items)
    { id: 11, name: 'T-Shirt', price: 777, image: '/images/tshirt1.jpg', category: 'fashion' },
    { id: 12, name: 'Chain', price: 199, image: '/images/chain.jpg', category: 'fashion' },
    { id: 13, name: 'Ring', price: 111, image: '/images/ring.jpg', category: 'fashion' },
    { id: 14, name: 'Sweater', price: 899, image: '/images/sweater.jpg', category: 'fashion' },
    { id: 15, name: 'Shirt', price: 699, image: '/images/shirt.jpg', category: 'fashion' },
    { id: 16, name: 'Shoe', price: 799, image: '/images/shoe1.jpg', category: 'fashion' },
    { id: 17, name: 'Track Suit', price: 999, image: '/images/tracksuit.jpg', category: 'fashion' },
    { id: 18, name: 'Cap', price: 99, image: '/images/cap.jpg', category: 'fashion' },
    { id: 19, name: 'Watch', price: 999, image: '/images/watch1.jpg', category: 'fashion' },
    { id: 20, name: 'Jeans', price: 899, image: '/images/jeans.jpg', category: 'fashion' },
    // Home (10 items)
    { id: 21, name: 'Chair', price: 1499, image: '/images/chair1.jpg', category: 'home decor' },
    { id: 22, name: 'Table', price: 899, image: '/images/table.jpg', category: 'home decor' },
    { id: 23, name: 'Bed', price: 299, image: '/images/bed.jpg', category: 'home decor' },
    { id: 24, name: 'Lamp', price: 699, image: '/images/lamp1.jpg', category: 'home decor' },
    { id: 25, name: 'Curtain', price: 99, image: '/images/curtain.jpg', category: 'home decor' },
    { id: 26, name: 'Cup', price: 299, image: '/images/cup.jpg', category: 'home decor' },
    { id: 27, name: 'Pillow', price: 99, image: '/images/pillow.jpg', category: 'home decor' },
    { id: 28, name: 'Blanket', price: 199, image: '/images/blanket.jpg', category: 'home decor' },
    { id: 29, name: 'Bottle', price: 79, image: '/images/bottle1.jpg', category: 'home decor' },
    { id: 30, name: 'Vase', price: 499, image: '/images/vase.jpg', category: 'home decor' },
    // Books (10 items)
    { id: 31, name: 'Novel', price: 99, image: '/images/novel1.jpg', category: 'books' },
    { id: 32, name: 'Textbook', price: 199, image: '/images/textbook.jpg', category: 'books' },
    { id: 33, name: 'Grammar Book', price: 49, image: '/images/grammar.jpg', category: 'books' },
    { id: 34, name: 'Storybook', price: 99, image: '/images/story.jpg', category: 'books' },
    { id: 35, name: 'Calligraphy Set', price: 499, image: '/images/calligraphy.jpg', category: 'books' },
    { id: 36, name: 'Notebook', price: 49, image: '/images/notebook1.jpg', category: 'books' },
    { id: 37, name: 'Calendar', price: 199, image: '/images/calendar.jpg', category: 'books' },
    { id: 38, name: 'Journal', price: 199, image: '/images/journal.jpg', category: 'books' },
    { id: 39, name: 'Board', price: 299, image: '/images/board.jpg', category: 'books' },
    { id: 40, name: 'Pen', price: 49, image: '/images/pen.jpg', category: 'books' },
    // Sports (10 items)
    { id: 41, name: 'Volleyball', price: 499, image: '/images/volleyball.jpg', category: 'sports' },
    { id: 42, name: 'Hockey Stick', price: 899, image: '/images/hockeystick.jpg', category: 'sports' },
    { id: 43, name: 'Football', price: 499, image: '/images/football.jpg', category: 'sports' },
    { id: 44, name: 'Cricket Kit', price: 5499, image: '/images/cricket1.jpg', category: 'sports' },
    { id: 45, name: 'Tennis Racket', price: 699, image: '/images/tennisracket.jpg', category: 'sports' },
    { id: 46, name: 'Badminton Set', price: 399, image: '/images/badminton.jpg', category: 'sports' },
    { id: 47, name: 'Basketball', price: 599, image: '/images/basketball.jpg', category: 'sports' },
    { id: 48, name: 'Bat', price: 2999, image: '/images/bat1.jpg', category: 'sports' },
    { id: 49, name: 'Yoga Mat', price: 299, image: '/images/yogamat.jpg', category: 'sports' },
    { id: 50, name: 'Golf set', price: 2999, image: '/images/golf.jpg', category: 'sports' },
    // Beauty (10 items)
    { id: 51, name: 'Sunscreen', price: 199, image: '/images/sunscreen.jpg', category: 'beauty' },
    { id: 52, name: 'Lip Balm', price: 129, image: '/images/lipbalm.jpg', category: 'beauty' },
    { id: 53, name: 'Face Cream', price: 299, image: '/images/cream1.jpg', category: 'beauty' },
    { id: 54, name: 'Shampoo', price: 199, image: '/images/shampoo.jpg', category: 'beauty' },
    { id: 55, name: 'Perfume', price: 299, image: '/images/perfume1.jpg', category: 'beauty' },
    { id: 56, name: 'Makeup Kit', price: 1299, image: '/images/makeupkit.jpg', category: 'beauty' },
    { id: 57, name: 'Hair Oil', price: 149, image: '/images/hairoil.jpg', category: 'beauty' },
    { id: 58, name: 'Face Wash', price: 99, image: '/images/facewash.jpg', category: 'beauty' },
    { id: 59, name: 'Conditioner', price: 179, image: '/images/conditioner.jpg', category: 'beauty' },
    { id: 60, name: 'Body Lotion', price: 249, image: '/images/bodylotion.jpg', category: 'beauty' },
  ];

  const filtered = allProducts.filter(p => p.category.toLowerCase() === decodeURIComponent(name).toLowerCase());

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ textTransform: 'capitalize', marginBottom: '20px' }}>
        {decodeURIComponent(name)}
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
        {filtered.map(product => (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;