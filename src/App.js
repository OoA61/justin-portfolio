import logo from './logo.svg';
import './App.scss';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

import { useState } from 'react';

function App() {
  return (
    <BrowserRouter>
      <Sidebar/>
      <Main/>
      <About/>
      <Portfolio/>
      <Contact/>
    </BrowserRouter>
  );
}

export default App;
