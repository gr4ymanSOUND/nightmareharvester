import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './components/App';

import './style/nightmare-style.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <App />
);