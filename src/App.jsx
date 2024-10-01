import { RouterProvider } from "react-router-dom"
import { routes } from "./router/routes";

import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { AboutUs } from './pages/AboutUs/AboutUs';
import { Services } from './pages/Services/Services';
import { SiteLayout } from './components/layout/SiteLayout';
import ErrorPage from "./pages/errorPage";
import { SelectedCategory } from "./components/category/SelectedCategory"
import { UserProvider } from "./context/LoginContext";
import { Login } from "./pages/Login-SignIn/Login-SignIn";


const router = createBrowserRouter([
  {
    path: "/", 
    element: <SiteLayout />, 
    errorElement: <ErrorPage />, 
    children: [
      {
        path: routes.home,
        element: <Home />,
      },
      {
        path: routes.about,
        element: <AboutUs />,
      },
      {
        path: routes.services,
        element: <Services />,
      },
      {
        path: routes.login,
        element: <Login />,
      },
      {
        path: routes.searchCategory,
        element: <SelectedCategory />,
      },
    ]
  }
  
]);

function App() {

  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  )
}

export default App
