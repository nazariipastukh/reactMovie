import {Header} from "../components";
import {Outlet} from "react-router-dom";

export const MainLayout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};