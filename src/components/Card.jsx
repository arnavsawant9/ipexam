import React from 'react';

function Card({ imageUrl, title, description }) {
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '16px', width: '250px', textAlign: 'center' }}>
      <img 
        src={imageUrl} 
        alt="Card Image" 
        style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '4px' }} 
      />
      <h2 style={{ fontSize: '18px', margin: '10px 0' }}>{title}</h2>
      <p style={{ fontSize: '14px', color: '#555' }}>{description}</p>
    </div>
  );
}

export default Card;
