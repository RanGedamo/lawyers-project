import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthContextProvider } from './context/UserContext';
import { PopupProvider } from './context/ChatProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <PopupProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </PopupProvider>
  </AuthContextProvider>

);
