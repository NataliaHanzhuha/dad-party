import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/Main/Main';
import Story from './components/Story/Story';
import Wishes from './components/Wishes/Wishes';
import PartyMenu from './components/PartyMenu';

const root = ReactDOM.createRoot(document.getElementById('root'));

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/biography", element: <Story /> },
      { path: "/well-wishes", element: <Wishes /> },
      { path: "/party-menu", element: <PartyMenu /> },
      { path: "/", element: <Main /> },
    ]
  }
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
