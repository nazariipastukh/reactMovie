import {useNavigate} from "react-router-dom";
import styles from './Genre.module.css'

export const Genre = ({genre}) => {
    const {id, name} = genre
    const navigate = useNavigate()

    return (
        <div className={styles.genre} onClick={() => navigate(`/genres/${id}`)}>
            {name}
        </div>
    );
};