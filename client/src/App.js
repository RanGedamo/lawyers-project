import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './component/Footer/Footer'
import Header from './component/Header/Header';
import Routing from './Routing';



function App() {
console.log(process.env.REACT_APP_HOT_APR_KEY);
  
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routing />
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;


