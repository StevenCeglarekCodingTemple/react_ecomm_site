import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePageView from './views/HomePage/HomePageView';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import SingleProductView from "./views/SingleProductPage/SingleProductView";
import CartView from "./views/CartPage/CartView";
import ContactView from "./views/ContactPage/ContactView";
import CheckoutView from "./views/CheckoutPage/CheckoutView";
import ProductSearchView from "./views/ProductSearch/ProductSearchView";
import './App.css'

function App() {

  return (
    <div>

      <BrowserRouter>
      <div className="new-container">
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePageView />} />
          <Route path='/products/search' element={<ProductSearchView />} />
          <Route path='/product/:id' element={<SingleProductView />} />
          <Route path='/cart' element={<CartView />} />
          <Route path='/contact_us' element={<ContactView />} />
          <Route path='/checkout' element={<CheckoutView />} />
        </Routes>
        <Footer />
      </div>
      </BrowserRouter>
      
    </div>
  )
}

export default App
