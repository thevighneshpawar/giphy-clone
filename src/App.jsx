import { useState } from 'react'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'

import AppLayout from './layouts/AppLayout'
import Home from './pages/Home'
import Categories from './pages/Categories'
import Search from './pages/Search'
import GifPage from './pages/GifPage'
import './App.css'
import Favourites from './pages/Favourites'
import GifProvider from './context/gif-context'


// homepage
//categories
//search 
//single gif
//favourite

const router = createBrowserRouter([
    {
     element:<AppLayout/>,
    //  errorElement: we can add this also
     children:[
      {
        path:'/',
        element:<Home/>
      }, 
      {
        path:"/:categories",
        element:<Categories/>
      },
      {
        path:'/search/:query',
        element:<Search/>
      },
      
      {
        path:'/:type/:slug',
        element:<GifPage/>
      },
      {
        path:'/favourites',
        element:<Favourites/>
      }
     ]
    }
])

function App() {
 

  return (
    <GifProvider>
      <RouterProvider router={router}/>
    </GifProvider>
  );
}

export default App
