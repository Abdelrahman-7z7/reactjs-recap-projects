import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import RootLayout from './Routes/RootLayout.jsx'

import './index.css'
import Posts, {loader as postsLoader} from './Routes/Posts.jsx'
import NewPost , {action as newPostAction} from './Routes/NewPost.jsx'
import PostDetails, {loader as detailsLoader} from './Routes/PostDetails.jsx'
// the createBrowserRouter takes array as an argument => an array of all the routers you want to have => and that list is an OBJECT

const router = createBrowserRouter([
  //we use RootLayout for handling nested-routes
  {
    path:'/', 
    element:<RootLayout /> , 
    children:[
      {
        path:'/', 
        element: <Posts />, 
        //used to fetch data before rendering the element in here BUT normally we keep this path clean and add the function in the element page and import it here
        // loader: ()=>{},
        loader: postsLoader,
        //we can use action to load data before it gets activated => in accordance when the form is submitted this action will be run 
        children:[
          {path: '/create-post', element: <NewPost />, action: newPostAction},
          {path: '/:id', element: <PostDetails/>, loader: detailsLoader }
        ]
      }, //<our-domain> entering our domain => we should also define the element that should be run when we call that path
  ]}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* RouterProvider => watch the URL and start rendering different components, it should be run instead of <App/> */}
    {/* <App /> */}
    <RouterProvider router={router}/>
  </StrictMode>,
)
