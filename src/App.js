import './styles/App.css';
import React from "react";
import Home from "./pages/Home";
import Meny from "./pages/Meny";
import HittaHit from './pages/HittaHit';
import Oppettider from './pages/Oppettider';
import Bestall from './pages/Bestall';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div> 
      <Router>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Meny' element={<Meny/>}/>
      <Route path='/HittaHit' element={<HittaHit/>}/>
      <Route path='/Oppettider' element={<Oppettider/>}/>
      <Route path='/Bestall' element={<Bestall/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
