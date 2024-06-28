import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import './index.css'
import Root from "./Routes/MainPage.tsx";
import OrderPage from "./Routes/OrderPage.tsx";
import AboutUsPage from "./Routes/AboutUsPage.tsx";
import MenuPage from "./Routes/MenuPage.tsx";
import Home from "./Routes/MainPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/Order",
    element: <OrderPage />,
  },
  {
    path: "/Menu",
    element: <MenuPage />,
  },
  {
    path: "/about-us",
    element: <AboutUsPage  />,
  },

]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)