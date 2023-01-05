import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthContextProvider } from './context/UserContext';
import { ChatProvider } from './context/ChatProvider';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <ChatProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ChatProvider>
  </AuthContextProvider>
);