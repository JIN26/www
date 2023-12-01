import { Menu, Navbar } from './components/common';
import { Home, Product, Products, User, Users, Login } from './pages';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import './styles/app.scss'
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
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
