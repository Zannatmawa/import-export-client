import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router";
import HomeLayout from './Layouts/HomeLayout.jsx';
import Home from './components/Home/Home.jsx';
import LatestProducts from './components/LatestProducts/LatestProducts.jsx';
import AllProducts from './components/AllProducts/AllProducts.jsx';
import MyExports from './components/MyExports/MyExports.jsx';
import MyImports from './components/MyImports/MyImports.jsx';
import AddExports from './components/AddExports/AddExports.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import AuthProvider from './components/contexts/AuthProvider.jsx';
import ProductDetails from './components/ProductDetails/ProductDetails.jsx';
import PrivateRoute from './components/contexts/PrivateRoute/PrivateRoute.jsx';
import AuthLayout from './Layouts/AuthLayout.jsx';
import Search from './components/Search/Search.jsx';
import OurServices from './components/OurServices/OurServices.jsx';
// const URL= import.meta.env.VITE_API_URL
const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/services",
        element: <OurServices />
      },
      {
        path: "/all-products",
        loader: () => fetch(`https://import-export-hub-sigma.vercel.app/products`),
        element: <AllProducts />
      },
      {
        path: "/my-exports",
        element: <PrivateRoute><MyExports /></PrivateRoute>
      },
      {
        path: "/my-imports",
        loader: () => fetch('https://import-export-hub-sigma.vercel.app/imports'),
        element: <PrivateRoute><MyImports /></PrivateRoute>
      },
      {
        path: "/add-exports",
        element: <PrivateRoute> <AddExports /></PrivateRoute>
      },
      {
        path: "/my-imports",
        loader: () => fetch('https://import-export-hub-sigma.vercel.app/imports'),
        element: <PrivateRoute><MyImports /></PrivateRoute>
      },
      {
        path: "/search",
        loader: () => fetch(`https://import-export-hub-sigma.vercel.app/products`),
        element: <Search />

      },
      {
        path: "/productDetails/:id",
        loader: ({ params }) => fetch(`https://import-export-hub-sigma.vercel.app/products/${params.id}`),
        element: <ProductDetails />
      }

    ]
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [{
      path: "/auth/login",
      element: <Login />
    },
    {
      path: "/auth/register",
      element: <Register />,
    }

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
