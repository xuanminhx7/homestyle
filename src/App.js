import logo from './logo.svg';
import './App.css';
import Home from './Componets/Home';
import Hearder from './Componets/Header';
import Footer from './Componets/Footer';
import {Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Hearder />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* <Route path="/about" element={<About />} />
        <Route path="/product" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/freaturn" element={<Featurn />} />
        <Route path="/testimonail" element={<Testimonial />} />
        <Route path="/404" element={<Main404 />} />
        <Route path="/product-detall/:id" element={<ProductDetall />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
