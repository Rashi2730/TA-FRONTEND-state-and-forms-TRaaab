import React from 'react';
import './style.css';
import Menu from './components/Menu';
import Header from './components/Header';
import menu from './data.json';
import Categories from './components/Categories';
import { useState } from 'react';

const allCategories = ['all', ...new Set(menu.map((item) => item.category))];
function App() {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (cat) => {
    if (cat == 'all') {
      return setMenuItems(menu);
    }
    const newItems = menu.filter((i) => i.category === cat);
    return setMenuItems(newItems);
  };
  return (
    <div className="container">
      <Header />
      <Categories filterItems={filterItems} categories={categories} />
      <Menu items={menuItems} />
    </div>
  );
}
export default App;
