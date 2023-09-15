import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import styles from './Genre.module.css'

export const Genre = ({genre}) => {
    const {id, name} = genre
    const {themeCheck} = useSelector(state => state.theme)

    return (
        <div className={`${styles.genre} ${themeCheck ? '' : styles.lightGenre}`}>
            <NavLink to={`/genres/${id}`}>{name}</NavLink>
        </div>
    );
};