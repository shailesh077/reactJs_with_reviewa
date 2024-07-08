import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import FirstPage from './components/screen1/firstPage';
import SecondPage from './components/screen2/secondPage';
import ThirdPage from './components/screen3/thirdPage';
import Fourpage from './components/screen4/fourpage';
import Fivepage from './components/screen5/fivepage';
import { ResultItem } from './components/result';


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={<FirstPage />} />
    <Route path='secondpage' element={<SecondPage />} />
    <Route  path='thirdPage' element={<ThirdPage/>}/>
    <Route path='fourpage' element={<Fourpage/>}/>
    <Route path='fivepage' element={<Fivepage/>}/>
    <Route path='resultitem' element={<ResultItem/>}/>
    
    </>
    
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)