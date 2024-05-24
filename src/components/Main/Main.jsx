
import React from 'react';
import ProductList from "../Main/ProductList";
import Slider from "../Main/Slider";
import CatacoryBox from '../Main/CatacoryBox';

function Main() {
  return (
    <main className="Main">
      <Slider/>
      <CatacoryBox/>
      <ProductList/>
    </main>
  );
}

export default Main;
