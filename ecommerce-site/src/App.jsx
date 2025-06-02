import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './pages/About';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import ProductDetails from './pages/ProductDetails';
import Home from './pages/Home';
import Products from './pages/Products';
import Blog from './pages/Blog';
import BookDonation from './pages/BookDonation';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/book-donation" element={<BookDonation />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
