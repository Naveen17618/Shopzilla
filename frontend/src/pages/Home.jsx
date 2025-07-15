import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import API from '../api';

const Home = () => {
  const [products, setProducts] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    API.get('/products').then((res) => setProducts(res.data));
  }, []);

  return (
    <div>
      <h2>Welcome to ShopZilla</h2>
      {user ? (
        <p>Logged in as <strong>{user.name}</strong></p>
      ) : (
        <p>Please login or register.</p>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
        {products.map((p) => (
          <div key={p._id} style={{ border: '1px solid #ccc', padding: '10px' }}>
            <img src={p.image} alt={p.name} width="150" />
            <h3>{p.name}</h3>
            <p>₹{p.price}</p>
            <Link to={`/product/${p._id}`}>View</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
