// src/pages/Home.js
import React, { useState } from 'react';
import Card from '../componets/Card';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [visibleCards, setVisibleCards] = useState(3);

  const allCardData = [
    { imageSrc: "/img/braids.jpg", title: "Braids", creator: "Braids by Ario", duration: "65 mins" },
    { imageSrc: "/img/makeup.jpg", title: "Makeup", creator: "Makeup by Mary", duration: "30 mins" },
    { imageSrc: "/img/braids.jpg", title: "Curry braids", creator: "Braids by Ianoe", duration: "75 mins" },
    { imageSrc: "/img/braids.jpg", title: "Fade", creator: "Fade by Mich Muriithi", duration: "45 mins" },
    { imageSrc: "/img/makeup.jpg", title: "Spa", creator: "Spa by Mukuru", duration: "90 mins" },
    { imageSrc: "/img/braids.jpg", title: "Bella Braids", creator: "Bella Braids by Mukuru", duration: "80 mins" },
  ];

  const handleCardClick = () => {
    navigate('/booking');
  };

  const loadMore = () => {
    setVisibleCards(prevVisible => Math.min(prevVisible + 3, allCardData.length));
  };

  return (
    <div>
      <header>
        <h2 className="text-gray-700 text-6xl font-semibold">Styles</h2>
        <h3 className="text-2xl font-semibold">Everything Beauty</h3>
      </header>

      <div>
        <h4 className="font-bold pb-2 mt-12 border-b border-gray-200">Top Trends & Stylist</h4>

        <div className="mt-8 grid lg:grid-cols-3 gap-10">
          {allCardData.slice(0, visibleCards).map((card, index) => (
            <div onClick={handleCardClick} key={index} className="cursor-pointer">
              <Card {...card} />
            </div>
          ))}
        </div>

        {visibleCards < allCardData.length && (
          <div className="mt-12 flex justify-center">
            <div
              onClick={loadMore}
              className="btn bg-secondary-100 text-secondary-200 inline-block hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300 cursor-pointer"
            >
              Load more
            </div>
          </div>
        )}
      </div>

      <h4 className="font-bold pb-2 mt-12 border-b border-gray-200">SS</h4>

    </div>
  );
};

export default Home;