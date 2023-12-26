import React from 'react';
import Carousel from '@/components/ui/Carousel'
import Products from '@/components/products/Products';

const Homepage = () => {
  return (
    <div className='max-w-6xl min-h-screen mx-auto'>
      <Carousel></Carousel>
      <Products></Products>
    </div>
  );
};

export default Homepage;