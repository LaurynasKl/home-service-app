import { Outlet } from "react-router";
import TopBar from './TopBar';

export function SiteLayout() {
    return (
        <div>
            <TopBar />
            <main>
                <Outlet />
            </main>
        </div>
    );
};