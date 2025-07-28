
import React from 'react';

function App() {
  const products = [
    {
      name: "Classic Oversized Blazer",
      price: "$129",
      image: "https://source.unsplash.com/featured/?blazer",
    },
    {
      name: "Minimalist Linen Shirt",
      price: "$89",
      image: "https://source.unsplash.com/featured/?linen-shirt",
    },
    {
      name: "Tailored Wide-Leg Trousers",
      price: "$109",
      image: "https://source.unsplash.com/featured/?trousers",
    },
  ];

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>LEVARÉ Paris</h1>
        <p style={{ color: '#666' }}>Curated Fashion Selections</p>
      </header>

      <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        {products.map((product, index) => (
          <div key={index} style={{ border: '1px solid #eee', borderRadius: '1rem', overflow: 'hidden', width: '300px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' }}>
            <img src={product.image} alt={product.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <div style={{ padding: '1rem' }}>
              <h3 style={{ margin: '0 0 0.5rem 0' }}>{product.name}</h3>
              <p style={{ color: '#777', marginBottom: '1rem' }}>{product.price}</p>
              <button style={{ width: '100%', padding: '0.5rem', background: '#111', color: 'white', border: 'none', borderRadius: '0.5rem' }}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
