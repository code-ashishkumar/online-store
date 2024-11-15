import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import AccountDetails from './components/AccountDetails';
import BlogDetails from './components/BlogDetails';
import BlogSection from './components/Blogs';
import Breadcrumb from './components/BreadCrumb';
import CartDetails from './components/CartDetails';
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Login from './components/Login';
import ProductDetails from './components/ProductDetails';
import ProductInfo from './components/ProductInfo';
import Register from './components/Register';
import Wishlist from './components/Wishlist';
import { Sidebar } from './components/Sidebar';
import useDynamicPath from './hooks/useDynamicPath';

function App() {
  // Generate breadcrumb items from current location path
  const path = useDynamicPath()
  return (
    <>
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Header />
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
          <Route path="/account-details" element={<AccountDetails />} />
          {/* Dynamic route for product */}
          {/* <Route path="/work" element={<Work />} />
            <Route path="/about" element={<About />} /> */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
