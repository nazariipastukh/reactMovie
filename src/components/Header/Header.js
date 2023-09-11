import {Link, NavLink} from "react-router-dom";
import styles from './Header.module.css'
import {UserInfo} from "../User/UserInfo";

export const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.headerLogo}>
                <Link to={'/'}>
                    <img src={'https://imageupload.io/ib/4Kzereh9kJMU4rB_1694439555.jpg'} alt={'headerImage'}/>
                </Link>
            </div>
            <div className={styles.headerLinks}>
                <NavLink to={'/'}>Main Page</NavLink>
                <NavLink to={'/movies'}>Movies</NavLink>
                <NavLink to={'/genres'}>Genres</NavLink>
            </div>
            <div className={styles.headerUser}>
                <UserInfo/>
            </div>
        </div>
    );
};