import React, { useState } from 'react';
import '../App.css';
import Nav from './Nav';
import ItemPage from './ItemPage.jsx';
import { items } from '../static-data';

const App = () => {
  const [activeTab, setActiveTab] = useState('items');
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart(prevCart => [...prevCart, item.id]);
  }

  return (
    <div className="App">
      <Nav
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      <main className="App-content">
        <Content tab={activeTab} onAddToCart={addToCart} />
      </main>
    </div>
  );
}

const Content = ({ tab, onAddToCart }) => {
  switch (tab) {
    case 'items':
      return <ItemPage items={items} onAddToCart={onAddToCart} />;
    case 'cart':
      return <span>the cart</span>;
    default:
      return null;
  }
}

export default App;

