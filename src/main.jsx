import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Router, RouterProvider, createBrowserRouter} from 'react-router-dom'
import './index.css'
import App from './App.jsx'

// the createBrowserRouter takes array as an argument => an array of all the routers you want to have => and that list is an OBJECT

const router = createBrowserRouter([
  {path:'/', element: <App />}, //<our-domain> entering our domain => we should also define the element that should be run when we call that path 
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* RouterProvider => watch the URL and start rendering different components, it should be run instead of <App/> */}
    {/* <App /> */}
    <RouterProvider router={router}/>
  </StrictMode>,
)
