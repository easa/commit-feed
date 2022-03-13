import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@mui/material';
import reportWebVitals from './reportWebVitals';
import App from './App';
import mainTheme from './theme/main.theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={mainTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
