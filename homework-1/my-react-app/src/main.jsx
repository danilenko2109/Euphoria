import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router'
import { store } from './store/store.js';
import { ViewModeProvider } from './context/ViewModeContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
   <ViewModeProvider>

    <BrowserRouter>
    <App />
    </BrowserRouter>

   </ViewModeProvider>

    </Provider>
  </StrictMode>,
)
