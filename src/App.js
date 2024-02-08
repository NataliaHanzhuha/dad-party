import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Fragment } from 'react';
import { Outlet } from "react-router-dom";
import Main from './components/Main';

function App() {
  const wrapper = {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    // margin: '10px'
  };
  return <>
    <Header/>
    <main style={wrapper}>
      <Outlet />
    </main>
  </>;
}

export default App;
