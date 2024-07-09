import ReactDOM from 'react-dom/client';
import App from './App.jsx';
// Supports weights 100-900
import '@fontsource-variable/outfit';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
