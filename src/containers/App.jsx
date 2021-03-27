import React from "react";

import Categories from "../components/Categories.jsx";
import Carousel from "../components/Carousel.jsx";
import CarouselItem from "../components/CarouselItem.jsx";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Search from "../components/Search.jsx";

import "../assets/styles/App.scss";

import useInitialState from "../hooks/useInitialState.js";
const API = "http://localhost:3000/initialState";

const App = () => {
  const initialState = useInitialState(API);

  return (
    <>
      <Header />
      <Search />
      {initialState.mylist.lenght > 0 && (
        <Categories title="Mi lista">
          <Carousel>
            <CarouselItem />
          </Carousel>
        </Categories>
      )}

      <Categories title="Trends">
        <Carousel>
          {initialState.trends?.map((item) => {
            return <CarouselItem key={item.id} {...item} />;
          })}
        </Carousel>
      </Categories>
      <Categories title="Originales de Platzi Video">
        <Carousel>
          {initialState.originals?.map((item) => {
            return <CarouselItem key={item.id} {...item} />;
          })}
        </Carousel>
      </Categories>
      <Footer />
    </>
  );
};

export default App;
