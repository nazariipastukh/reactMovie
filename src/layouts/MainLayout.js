import {Header} from "../components";
import {Outlet} from "react-router-dom";
import {useSelector} from "react-redux";
import styles from './Outlet.module.css'

export const MainLayout = () => {
    const {themeCheck} = useSelector(store => store.theme)
    const theme = localStorage.getItem('theme') === 'true'

    return (
        <div className={themeCheck || theme ? styles.dark : styles.light}>
            <Header/>
            <Outlet/>
        </div>
    );
};