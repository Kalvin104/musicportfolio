import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import Root from './routes/root'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Musician from './pages/Musician';
import Producer from './pages/Producer';
import Tuition from './pages/Tuition';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<App />} />
      <Route path='musician' element={<Musician />}/>
      <Route path='producer' element={<Producer />}/>
      <Route path='tuition' element={<Tuition />}/>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

