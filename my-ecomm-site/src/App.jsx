import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePageView from './views/HomePage/HomePageView';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import SingleProductView from "./views/SingleProductPage/SingleProductView";
import CartView from "./views/CartPage/CartView";
import ContactView from "./views/ContactPage/ContactView";

function App() {

  return (
    <div>

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePageView />} />
          <Route path='/product/:id' element={<SingleProductView />} />
          <Route path='/cart' element={<CartView />} />
          <Route path='/contact_us' element={<ContactView />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      
    </div>
  )
}

export default App
