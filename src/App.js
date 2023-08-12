import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import React from "react";
import Footer from './components/Common/Footer';
import Launch from './pages/Launch';
import Brands from './pages/Brands';
import BrandDetails from './pages/BrandDetails';
import Dine from './pages/Dine';
import DineDetails from './pages/DineDetails';
import Luxury from './pages/Luxury';
import Leisure from './pages/Leisure';
import EventMain from './pages/EventMain';
import EventDetails from './pages/EventDetails';

function App() {
  return (
    <Routes>
      <Route path='/' element={<><Home /><Footer/></>} />
      <Route path='/launch' element={<><Launch /><Footer/></>} />
      <Route path='/brands' element={<><Brands /><Footer/></>} />
      <Route path='/brand-detail' element={<><BrandDetails /><Footer/></>} />
      <Route path='/dine' element={<><Dine /><Footer/></>} />
      <Route path='/dine-detail' element={<><DineDetails /><Footer/></>} />
      <Route path='/luxury' element={<><Luxury /><Footer/></>} />
      <Route path='/leisure' element={<><Leisure /><Footer/></>} />
      <Route path='/events' element={<><EventMain /><Footer/></>} />
      <Route path='/event-details' element={<><EventDetails /><Footer/></>} />
    </Routes>
  );
}

export default App;
