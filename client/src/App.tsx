import { Menu, Navbar } from './components/common';
import { Home, Product, Products, User, Users } from './pages';
import './styles/app.scss'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
//import Users from "./pages/users/Users";
//import Products from "./pages/products/Products";
// import Navbar from "./components/navbar/Navbar";
// import Footer from "./components/footer/Footer";
// import Menu from "./components/menu/Menu";
// import Login from "./pages/login/Login";
// import "./styles/global.scss";
// import User from "./pages/user/User";
// import Product from "./pages/product/Product";
// import { QueryClient, QueryClientProvider, } from "@tanstack/react-query";


//const queryClient = new QueryClient();

function App() {
  const Layout = () => {
    return (
      <div className="main">
       <Navbar />  
        <div className="container">
          <div className="menuContainer">
            
            <Menu />
          </div>
          <div className="contentContainer">
            {/*<QueryClientProvider client={queryClient}>
              
            </QueryClientProvider>*/}
            <Outlet />
          </div>
        </div>
        {/*<Footer />*/}
        
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
          
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/users/:id",
          element: <User />,
        },
        {
          path: "/products/:id",
          element: <Product />,
        },
      ],
    },
    
  ]);

  return <RouterProvider router={router} />;
}

export default App;

/*
        
        
        
        


        {
      path: "/login",
      element: <Login />,
    },

*/