import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider, } from "react-router-dom";
import Base from './components/baseComponent/Base';
import Home from './components/HomeComponent/Home';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { HelmetProvider } from 'react-helmet-async';
import ErrorPage from './components/ErrorPageComponent/ErrorPage';
import Login from './components/AuthenticationComponent/Login';
import Register from './components/AuthenticationComponent/Register';
import AuthProvider from './Provider/AuthProvider';
import PrivateRoute from './components/AuthenticationComponent/PrivateRoute';
import UpdateProfile from './components/AuthenticationComponent/UpdateProfile';
import ChangePassword from './components/AuthenticationComponent/ChangePassword';
import ForgotPassword from './components/AuthenticationComponent/ForgotPassword';
import Brands from './components/BrandsPageComponent/Brands'
import Coupon from './components/CouponPageComponent/Coupon';
import Bookmarks from './components/BookmarksPageComponent/Bookmarks';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Base/>,
    loader: async () => {
      try {
        const response = await fetch("/data/coupons.json");
        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
        }
        return await response.json();
      } catch (error) {
        console.error("Error fetching coupons data:", error.message);
        throw new Error("Could not load coupons data. Please try again later.");
      }
    },
    errorElement: <ErrorPage/>,

    children:[
      {
        path: "/",
        element: <Home/>,

      },
      {
        path: "/brands",
        element: <Brands/>,
      },
      {
        path: "/bookmarks",
        element: <PrivateRoute><Bookmarks/></PrivateRoute>,
      },
      {
        path: "/brand/:_id",
        element: <PrivateRoute><Coupon/></PrivateRoute>,
      },      
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/register",
        element: <Register/>,
      },
      {
        path: "/update-profile",
        element: <PrivateRoute><UpdateProfile/></PrivateRoute> ,
      },
      {
        path: "/change-password",
        element: <PrivateRoute><ChangePassword/></PrivateRoute> ,
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword/>,
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router}/>
      </AuthProvider>
    </HelmetProvider>

    <ToastContainer position="top-center"/>

  </StrictMode>,
)
