import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ProductoGrande from './components/ProductoGrande';
import Scroll from './components/Scroll'

function App() {
  return (
   <div className='app'>
    <Navbar></Navbar>    
      <ProductoGrande></ProductoGrande>
      <Scroll></Scroll>
   </div>
    );
}

export default App;
