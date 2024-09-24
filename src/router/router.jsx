import { createBrowserRouter } from "react-router-dom";
import AboutUs from '../pages/AboutUs/AboutUs';
import Services from '../pages/Services/Services';

export const router = createBrowserRouter([
    {
        path: "/about",
        element: <AboutUs />
    },
    {
        path: "/sevices",
        element: <Services />
    },
]);