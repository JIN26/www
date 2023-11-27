import { Menu, Navbar } from './components/common';
import { Home, Product, Products, User, Users } from './pages';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Login } from './pages/Login';


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


