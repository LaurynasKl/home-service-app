import { createBrowserRouter } from "react-router-dom";

import { AboutUs } from '../pages/AboutUs/AboutUs.jsx';
import { Services } from '../pages/Services/Services';
import { Home } from "../pages/Home/Home";

import { SiteLayout } from '../components/layout/SiteLayout';


export const routes = {
        home: '/',
        about: '/about',
        services: '/services',
    }
    
export const router = createBrowserRouter([
    {
        path: "/", element:<SiteLayout />, children: [
            {
                index: true,
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
        ]
    }
]);