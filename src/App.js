
import React from 'react';
import './App.css';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About'
import Contact from './components/Contact'
import Invoice from './components/Invoice'
import AddItems from './components/AddItems';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route path='/addinvs' element={<AddItems/>}/>
      </Routes>
    </Router>
  );
}

export default App;
