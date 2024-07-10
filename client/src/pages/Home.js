// src/pages/Home.js
import React from 'react';
import Card from '../componets/Card';

const Home = () => {
  const cardData = [
    { imageSrc: "/img/braids.jpg", title: "Braids", creator: "Braids by Ario", duration: "65 mins" },
    { imageSrc: "/img/makeup.jpg", title: "Makeup", creator: "Makeup by Mary", duration: "30 mins" },
    { imageSrc: "/img/braids.jpg", title: "Curry braids", creator: "Braids by Ianoe", duration: "75 mins" },
  ];

  return (
    <div>
      <header>
        <h2 className="text-gray-700 text-6xl font-semibold">Styles</h2>
        <h3 className="text-2xl font-semibold">Everything Beauty</h3>
      </header>

      <div>
        <h4 className="font-bold pb-2 mt-12 border-b border-gray-200">Latest Recipes</h4>

        <div className="mt-8 grid lg:grid-cols-3 gap-10">
          {cardData.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>

        <h4 className="font-bold pb-2 mt-12 border-b border-gray-200">Recent Trends</h4>

        <div className="mt-8">
          {/* More cards can go here */}
        </div>
      </div>

      <div className="mt-12 flex justify-center">
        <div className="btn bg-secondary-100 text-secondary-200 inline-block hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300">
          Load more
        </div>
      </div>
    </div>
  );
};

export default Home;