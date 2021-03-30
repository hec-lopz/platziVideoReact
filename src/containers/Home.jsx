import React from "react";
import "../assets/styles/App.scss";
import Header from "../components/Header";
import Search from "../components/Search.jsx";
import Categories from "../components/Categories.jsx";
import Carousel from "../components/Carousel.jsx";
import CarouselItem from "../components/CarouselItem.jsx";

const App = () => {
  return (
    <>
      <Header />
      <Search />
      <Categories>
        <Carousel>
          <CarouselItem />
        </Carousel>
      </Categories>
    </>
  );
};

export default App;
