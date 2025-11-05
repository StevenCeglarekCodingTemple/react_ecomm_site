import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePageView from './views/HomePage/HomePageView';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <div>

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePageView />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      
    </div>
  )
}

export default App
