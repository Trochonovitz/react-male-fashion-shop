import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { worker } from './mocks/Browser';

worker.start().then(() => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  )
});

