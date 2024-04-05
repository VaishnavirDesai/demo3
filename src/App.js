import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from './components/Nav';
import Blogs from './components/Blogs';
import Home from './components/Home';
import Vanue from './components/Vanue';
import Gallery from './components/Gallery';
import Events from './components/Events';
import Contact from './components/Contact';
import Mobile from './components/Mobile';
import Button from './components/Button';


function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
      
      <Route path="/" element={<Nav/>}>
      <Route path="/home" element={ <Home/>}/>
      <Route path="/vanue" element={ <Vanue/>}/>
      <Route path="/gallery" element={ <Gallery/>}/>
      <Route path="/events" element={ <Events/>}/>
      <Route path="/blogs" element={ <Blogs/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/mobile" element={<Mobile/>}/>
      <Route path="/enquire" element={ <Button/>}/>
      </Route>
      </Routes>
    </BrowserRouter>

    
   
   </>
  );
}

export default App;
