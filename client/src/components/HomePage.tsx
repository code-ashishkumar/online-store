import React from 'react';
import Collection from './Collection';
import Carousel from './Crousal';
import Layout from './Layout';
import NewArrival from './NewArrival';
import ProductGrid from './Product';
import ProductCrousel from './ProductCrousel';
import Promo from './Promo';

function HomePage() {
  return (
    <div>
      <Carousel />
      {/* <Details /> */}
      <Layout>
        {/* <HighlightsLanding /> */}

        {/* <LatestArrivals /> */}
        {/* <ProductLanding /> */}
        {/* <ProductSlide /> */}
        <NewArrival />
      </Layout>
      <Promo />
      <Layout>
        <ProductCrousel />
        <ProductGrid />
        <Collection />
      </Layout>
    </div>
  );
}

export default HomePage;
