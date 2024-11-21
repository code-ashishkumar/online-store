import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import BlogDetails from './components/BlogDetails';
import BlogSection from './components/Blogs';
import Breadcrumb from './components/BreadCrumb';
import CartDetails from './components/CartDetails';
import HomePage from './components/HomePage';
import ProductDetails from './components/ProductDetails';
import ProductInfo from './components/ProductInfo';
import Wishlist from './components/Wishlist';
import useDynamicPath from './hooks/useDynamicPath';

function App() {
  // const [path, setPath] = useState("/")

  const path = useDynamicPath();

  return (
    <>
      <Router>
        {/* <Header /> */}
        {/* <ProductDetails/> */}
        {path === '/' ? null : <Breadcrumb />}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:product" element={<ProductInfo />} />{' '}
          {/* Dynamic route for product */}
          <Route
            path="/product/:product-name/:id"
            element={<ProductDetails />}
          />
          <Route path="/cart" element={<CartDetails />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<BlogSection />} />
          <Route path="/blog-details/?" element={<BlogDetails />} />
          {/* Dynamic route for product */}
          {/* <Route path="/work" element={<Work />} />
            <Route path="/about" element={<About />} /> */}
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
