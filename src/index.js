import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './components/App';

// import './style/nightmare-style.css';
import './style/app.css';
import './style/header.css';
import './style/homepage.css';
import './style/videos.css';
import './style/footer.css';
import './style/loginform.css';
import './style/registerform.css';
import './style/admin.css';



const root = createRoot(document.getElementById('root'));
root.render(
  <App />
);