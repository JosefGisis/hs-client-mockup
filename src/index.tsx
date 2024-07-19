import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './App';

import './index.css';
import './primereact/theme.css';
import 'primeicons/primeicons.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
