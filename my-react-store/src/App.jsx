
import './App.css';
import "./components/Navbar";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import QuantityPicker from './components/QuantityPicker';
import Catalog from './Pages/Catalog';
function App() {

  return (
    <div>
    <Navbar/>
    <Catalog/>
    <Footer/>
    </div>
  )
}

export default App
