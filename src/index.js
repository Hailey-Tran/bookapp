import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  BrowserRouter, Routes, Route 
} from 'react-router-dom';
import { AppProvider } from './context';
import Home from './pages/Home/home'
import About from './pages/About/about';
import Booklist from './components/Booklist/booklist';
import Bookdetails from './components/BookDetails/bookdetails';
import ImageCredits from './pages/ImageCredits/imagecredits';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home />}>
        <Route path = "about" element = {<About/>}/>
        <Route path = "book" element = {<Booklist/>}/>
        <Route path = "/book/:id" element = {<Bookdetails/>}/>
        <Route path = "/imagecredits" element = {<ImageCredits/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </AppProvider>
  
);
