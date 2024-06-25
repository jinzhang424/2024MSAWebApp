import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import './index.css'
import Root from "./Routes/MainPage.tsx";
import OrderPage from "./Routes/OrderPage.tsx";
import AboutUsPage from "./Routes/AboutUsPage.tsx";
import MenuPage from "./Routes/MenuPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
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
    path: "/About-Us",
    element: <AboutUsPage />,
  },

]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)