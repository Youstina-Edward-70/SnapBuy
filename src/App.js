import './App.css';
import Navbar from './components/Navbar';
import Home from './home/Home';
import Footer from './components/Footer';
import Products from './products/Products';
import ProductDetails from './singleProduct/ProductDetails';
import ThankYou from './components/ThankYou';
import About from './components/About';
import Contact from './components/Contact';
import { Outlet, Route, Routes } from 'react-router-dom';

import { CartProvider } from "./context/CartProvider";
import { DarkModeProvider } from "./context/DarkModeContext";
import Cart from './cart/Cart';
import Checkout from './cart/Checkout';

function App() {
  return (
    <DarkModeProvider>
      <CartProvider>
        <MainApp />
      </CartProvider>
    </DarkModeProvider>
  );
}

function MainApp() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={
          <>
            <Outlet />
          </>
        }>
          <Route index element={<Products />} />
          <Route path=':id' element={<ProductDetails />} />
        </Route>
        <Route path='/cart' element={< Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/thank-you' element={<ThankYou />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
