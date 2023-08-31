import {Link} from "react-router-dom";
import styles from './Header.module.css'

export const Header = () => {
    return (
        <div className={styles.header}>
            <Link to={'/'}>Main Page</Link>
            <Link to={'/movies'}>Movies</Link>
            <Link to={'/genres'}>Genres</Link>
        </div>
    );
};