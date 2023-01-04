import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './component/features/Footer/Footer';
import Header from './component/features/Header/Header';
import PopupProvider from "./context/chatProvider.jsx"
import Routing from './Routing';



function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <PopupProvider/>
      <Header />
      <Routing />
      <Footer />
      <PopupProvider/>
      </BrowserRouter>
    </div>
  );
}

export default App;


