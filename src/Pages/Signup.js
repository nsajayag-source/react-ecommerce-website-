import { useState } from 'react';
import { Link } from 'react-router-dom';

function Signup() {
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign up:', email, mobile, password);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
          required
        />
        <input 
          type="tel" 
          placeholder="Mobile Number" 
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
          required
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
          required
        />
        <button type="submit" style={{ width: '100%', padding: '10px' }}>
          Sign Up
        </button>
      </form>
      <p style={{ marginTop: '10px' }}>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default Signup;