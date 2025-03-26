import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import RootLayout from './Routes/RootLayout.jsx'

import './index.css'
import App from './App.jsx'
import NewPost from './components/NewPost.jsx'

// the createBrowserRouter takes array as an argument => an array of all the routers you want to have => and that list is an OBJECT

const router = createBrowserRouter([
  //we use RootLayout for handling nested-routes
  {
    path:'/', 
    element:<RootLayout /> , 
    children:[
      {path:'/', element: <App />}, //<our-domain> entering our domain => we should also define the element that should be run when we call that path 
      {path: '/create-post', element: <NewPost />}
  ]}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* RouterProvider => watch the URL and start rendering different components, it should be run instead of <App/> */}
    {/* <App /> */}
    <RouterProvider router={router}/>
  </StrictMode>,
)
