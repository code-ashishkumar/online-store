import './App.css';
import Carousel from './components/Crousal';
import Header from './components/Header';
import Collection from './components/Collection';
import HighlightsLanding from './components/HighlightsLanding';
import LatestArrivals from './components/LatestArrivals';
import Navbar from './components/Navbar';
import ProductLanding from './components/ProductLanding';
import ProductSlide from './components/ProductSlide';
import { EmblaOptionsType } from 'embla-carousel';
import ProductCrousel from './components/ProductCrousel';
import ProductGrid from './components/Product';
import Layout from './components/Layout';
import Promo from './components/Promo';
import NewArrival from './components/NewArrival';
import Footer from './components/Footer';

function App() {
  const OPTIONS: EmblaOptionsType = { align: 'start', dragFree: true };
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  const products = [
    {
      id: 1,
      title: 'Classic White T-Shirt',
      price: '$19.99',
      image: 'https://via.placeholder.com/300x300.png?text=Product+1',
    },
    {
      id: 2,
      title: 'Denim Jeans',
      price: '$49.99',
      image: 'https://via.placeholder.com/300x300.png?text=Product+2',
    },
    {
      id: 3,
      title: 'Leather Jacket',
      price: '$129.99',
      image: 'https://via.placeholder.com/300x300.png?text=Product+3',
    },
    {
      id: 4,
      title: 'Sneakers',
      price: '$79.99',
      image: 'https://via.placeholder.com/300x300.png?text=Product+4',
    },
    {
      id: 5,
      title: 'Sunglasses',
      price: '$29.99',
      image: 'https://via.placeholder.com/300x300.png?text=Product+5',
    },
  ];

  return (
    <>
      <Header />
      {/* <Navbar/> */}
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
      <Footer/>
    </>
  );
}

export default App;
