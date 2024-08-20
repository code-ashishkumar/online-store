import './App.css';
import Carousel from './components/Crousal';
import Header from './components/Header';
import Highlights from './components/Highlights';
import HighlightsLanding from './components/HighlightsLanding';
import LatestArrivals from './components/LatestArrivals';
import ProductLanding from './components/ProductLanding';
import ProductSlide from './components/ProductSlide';

function App() {
  return (
    <>
      <Header />
      <Carousel />
      {/* <Details /> */}
      <HighlightsLanding />
      <Highlights />
      <LatestArrivals />
      <ProductLanding />
      <ProductSlide />
    </>
  );
}

export default App;
