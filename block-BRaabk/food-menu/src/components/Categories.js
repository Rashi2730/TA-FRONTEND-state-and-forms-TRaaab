import React from 'react';

const Categories = ({ filterItems, categories }) => {
  console.log(categories);
  return (
    <div className="nav-box">
      {categories.map((c) => {
        return <button onClick={() => filterItems(c)}>{c}</button>;
      })}
    </div>
  );
};

export default Categories;
