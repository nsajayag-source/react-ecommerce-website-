import './App.css';
import { CartProvider } from './Context/CartContext';
import { ThemeProvider } from './Context/ThemeContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Category from './Pages/Category';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import ProductDetail from './Pages/ProductDetail';

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/category/:name" element={<Category />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;