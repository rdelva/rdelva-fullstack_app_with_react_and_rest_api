import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// import { UserProvider } from './context/UserContext';
// import { ThemeProvider } from './context/ThemeContext';

import './styles/reset.css';
import './styles/global.css';


import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <ThemeProvider> 
        <UserProvider>*/}
          <App />
        {/* </UserProvider>
      </ThemeProvider>  */}
    </BrowserRouter>
  </React.StrictMode>
);


