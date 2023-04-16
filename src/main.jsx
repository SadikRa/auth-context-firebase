import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './component/Main';
import Home from './component/Home';
import Login from './component/Login';
import Register from './component/Register';
import AuthProvider from './Provider/AuthProvider';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
 
   <AuthProvider>
     <RouterProvider router={router} />
   </AuthProvider>
  
)
