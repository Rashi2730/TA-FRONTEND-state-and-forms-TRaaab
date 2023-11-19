import React from 'react';

const Menu = ({ items }) => {
  // console.log(items);
  return (
    <main className="">
      <div className="grid">
        {items.map((item) => {
          const { id, title, price, img, desc } = item;
          return (
            <>
              <article>
                <div className="main-div">
                  <div className="main-img">
                    <img src={img} />
                  </div>
                  <h4>{title}</h4>
                  <h6>${price}</h6>
                  <p>{desc}</p>
                </div>
              </article>
            </>
          );
        })}
      </div>
    </main>
  );
};
export default Menu;
