import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './components/pages/Products';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/Products" element={<Products/>}/>
          <Route path="/Services" element={<Services/>}/>
          <Route path="/Sign-up" element={<SignUp/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;