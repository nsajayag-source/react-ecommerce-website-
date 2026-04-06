import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{
      padding: '15px 20px', 
      background: '#eee',
      display: 'grid',
      gridTemplateColumns: '1fr auto 1fr',
      alignItems: 'center'
    }}>
      <div style={{textAlign: 'top left'}}>
        <Link to="/">Home🏠</Link> | <Link to="/cart">Cart🛒</Link> | <Link to="/login">Login🔐</Link> | <Link to="/signup">Sign Up📝</Link>
      </div>
      
      <h1 style={{color: 'red', margin: 0, fontSize: '28px', fontWeight: 'bold'}}>
        AGA Shopping
      </h1>
      
      
    </nav>
  );
}

export default Navbar;