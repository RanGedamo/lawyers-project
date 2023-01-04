import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './component/features/Footer/Footer';
import Header from './component/features/Header/Header';
import PopUpBtn from './features/PopUpBtn/PopUpBtn';
import Routing from './Routing';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routing />
      <PopUpBtn/>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;


