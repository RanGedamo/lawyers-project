import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AuthContextProvider } from './context/UserContext';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

<<<<<<< HEAD


ReactDOM.render(  
<AuthContextProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
</AuthContextProvider>, document.getElementById('root'));
=======
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
<<<<<<< HEAD
<<<<<<< HEAD
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </AuthContextProvider>
=======
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AuthContextProvider>

>>>>>>> be4f594 (server-znevu , client-Ran)
=======
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </AuthContextProvider>
>>>>>>> 9405a1f (firebase with google - ran gedamo)
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
>>>>>>> 238c832 (firebase with google - ran gedamo)
