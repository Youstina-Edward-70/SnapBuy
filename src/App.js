import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import ThankYou from './pages/ThankYou';
import About from './pages/About';
import Contact from './pages/Contact';
import { Outlet, Route, Routes } from 'react-router';

import { CartProvider } from "./components/CartProvider";
import { DarkModeProvider } from "./components/DarkModeContext";
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

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
