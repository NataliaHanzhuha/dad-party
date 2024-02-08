import './App.css';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';

import { Fragment } from 'react';

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
      <Outlet/>
    </main>
  </>;
}

export default App;
