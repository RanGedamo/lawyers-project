import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './component/Footer/Footer'
import Header from './component/Header/Header';
import Routing from './Routing';

export default function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routing />
      <Footer />
      </BrowserRouter>
    </div>
  );
};
