import React from 'react';
import Card from './Card';  // Assuming you have the Card component already created
import datas_card from "./cardData";  // Your data for cards

function Passcards() {
  return (
    <div style={{ padding: '20px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
      {datas_card.map(data => (
        <Card
          key={data.id}
          title={data.title}
          description={data.description}
          imageUrl={data.image}
        />
      ))}
    </div>
  );
}

export default Passcards;
