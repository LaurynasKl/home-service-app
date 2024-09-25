import { RouterProvider } from "react-router-dom"
import { routes } from "./router/routes";

import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { AboutUs } from './pages/AboutUs/AboutUs';
import { Services } from './pages/Services/Services';
import { SiteLayout } from './components/layout/SiteLayout';
import { Login } from "./pages/Login-signIn/Login-SignIn";


const router = createBrowserRouter([
  {
    path: "/", element: <SiteLayout />, children: [
      {
        path: routes.home,
        element: <Home />
      },
      {
        path: routes.about,
        element: <AboutUs />
      },
      {
        path: routes.services,
        element: <Services />
      },
      {
        path: routes.login,
        element: <Login />
      },
    ]
  }
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
