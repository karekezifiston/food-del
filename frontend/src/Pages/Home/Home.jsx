import React, { useState, useRef } from 'react';
import Header from '../../Components/Header/Header';
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay';
import AppDownload from '../../Components/AppDownload/AppDownload';

const Home = () => {
  const [category, setCategory] = useState("All");

  // Create a ref to scroll to the menu
  const menuRef = useRef(null);

  // Function to scroll
  const scrollToMenu = () => {
    menuRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Header scrollToMenu={scrollToMenu} />
      
      {/* Wrap ExploreMenu in a div with the ref */}
      <div ref={menuRef}>
        <ExploreMenu category={category} setCategory={setCategory} />
      </div>

      <FoodDisplay category={category} />
      <AppDownload />
    </div>
  );
};

export default Home;
