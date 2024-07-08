import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import './index.css'
import OrderPage from "./Routes/OrderPage.tsx";
import AboutUsPage from "./Routes/AboutUsPage.tsx";
import Home from "./Routes/MainPage.tsx";
import Test from "./Routes/test.tsx"

const router = createBrowserRouter([

  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/Order",
    element: <OrderPage />,
  },
  {
    path: "/about-us",
    element: <AboutUsPage  />,
  },
  {
    path: "/test",
    element: <Test  />,
  },

]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)