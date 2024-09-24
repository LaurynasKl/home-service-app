import { Outlet } from "react-router-dom";
import TopBar from './TopBar';

export function SiteLayout() {
    return (
        <>
            <TopBar />
            <Outlet />
        </>
    );
};