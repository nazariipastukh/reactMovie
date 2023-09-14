import {GenresComponent} from "../../components";
import {Outlet} from "react-router-dom";
import styles from './GenrePage.module.css'

export const GenresPage = () => {
    return (
        <div className={styles.genrePage}>
            <GenresComponent/>
            <Outlet/>
        </div>
    );
};