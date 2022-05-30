import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Header/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="portfolio" element={<Portfolio/>}/>
    <Route path="/contact" element={<Contact/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
   
  
  
  );
}

export default App;
