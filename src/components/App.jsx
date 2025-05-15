import React, { useState } from 'react';
import '../App.css';
import Nav from './Nav';
import ItemPage from './ItemPage.jsx';
import { items } from '../static-data';
import CartPage from './CartPage';

const App = () => {
  const [activeTab, setActiveTab] = useState('items');
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart(prevCart => [...prevCart, item]);
  }

  function handleRemoveFromCart(itemId) {
    setCart(cart.filter(item => item.id !== itemId));
  }

  return (
    <div className="App">
      <Nav
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      <main className="App-content">
        <Content
          tab={activeTab}
          onAddToCart={addToCart}
          cart={summarizeCart(cart)}
          onRemoveFromCart={handleRemoveFromCart} // <-- Passe aqui!
        />
      </main>
    </div>
  );
}

const Content = ({tab, onAddToCart, cart, onRemoveFromCart}) => {
  switch (tab) {
    case 'items':
      return <ItemPage items={items} onAddToCart={onAddToCart} />;
    case 'cart':
      return <CartPage items={cart} onRemoveFromCart={onRemoveFromCart} />; // <-- Passe aqui!
    default:
      return null;
  }
}

const summarizeCart = (cart) => {
  const groupItems = cart.reduce((summary, item) => {
    summary[item.id] = summary[item.id] || {
      ...item,
      count: 0
    };
      summary[item.id].count++;
    return summary;
    }, {});
    return Object.values(groupItems);
}

export default App;

