import {Header} from "../components";
import {Outlet} from "react-router-dom";
import './Outlet.module.css'

export const MainLayout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};