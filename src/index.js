import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/home/home.page';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path={'/'} element={<App/>}>
        <Route path={'/'} element={<HomePage/>}/>
        <Route path={'/movie'} element={<h1>Movie Page</h1>}/>
        <Route path={'/tv'} element={<h1>TV Page</h1>}/>
        <Route path={'/person'} element={<h1>People Page</h1>}/>
        <Route path={'*'} element={<h1>Bunday sahifa topilmadi</h1>}/>
      </Route>
    </Routes>
  </BrowserRouter>
);
