import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './utillits/App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './router';

const root = ReactDOM.createRoot(document.getElementById('root'));

export const router = createBrowserRouter([{element: <App/>, children: [...routes]}]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
