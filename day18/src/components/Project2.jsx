import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API = 'https://fakestoreapi.com/products';

const Project2 = () => {
  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [error, setError] = useState(null);

  const fetchProducts = () => {
    axios.get(API)
      .then(res => setProducts(res.data))
      .catch(err => setError('Failed to fetch products'));
  };

  const addProduct = () => {
    axios.post(API, { title, price: parseFloat(price), description: "New product" })
      .then(() => {
        setTitle('');
        setPrice('');
        fetchProducts();
      });
  };

  const deleteProduct = (id) => {
    axios.delete(`${API}/${id}`)
      .then(() => fetchProducts());
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Product CRUD App</h2>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
      <input value={price} onChange={e => setPrice(e.target.value)} placeholder="Price" type="number" />
      <button onClick={addProduct}>Add Product</button>

      {error && <p>{error}</p>}
      <ul>
        {products.map(p => (
          <li key={p.id}>{p.title} - ${p.price} <button onClick={() => deleteProduct(p.id)}>Delete</button></li>
        ))}
      </ul>
    </div>
  );
};

export default Project2;

