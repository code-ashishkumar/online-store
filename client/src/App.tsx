import './App.css';
import Collection from './components/Collection';
import Carousel from './components/Crousal';
import Footer from './components/Footer';
import Header from './components/Header';
import Layout from './components/Layout';
import NewArrival from './components/NewArrival';
import ProductGrid from './components/Product';
import ProductCrousel from './components/ProductCrousel';
import Promo from './components/Promo';

function App() {
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
      <Footer />
    </>
  );
}

export default App;
