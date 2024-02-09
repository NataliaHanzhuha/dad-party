import './App.css';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';

import { Fragment } from 'react';

function App() {
  return <>
    <Header/>
    <main>
      <Outlet/>
    </main>
  </>;
}

export default App;
