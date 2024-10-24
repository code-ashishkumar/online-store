import './App.css';
import Collection from './components/Collection';
import Carousel from './components/Crousal';
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Layout from './components/Layout';
import NewArrival from './components/NewArrival';
import ProductGrid from './components/Product';
import ProductCrousel from './components/ProductCrousel';
import ProductDetails from './components/ProductDetails';
import ProductInfo from './components/ProductInfo';
import Promo from './components/Promo';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Header />
        {/* <ProductDetails/> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:product" element={<ProductInfo />} /> {/* Dynamic route for product */}
          <Route path="/product/:product-name/:id" element={<ProductDetails />} /> {/* Dynamic route for product */}

          {/* <Route path="/work" element={<Work />} />
            <Route path="/about" element={<About />} /> */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
