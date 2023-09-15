import {useNavigate} from "react-router-dom";
import styles from './Badge.module.css'

export const GenreBadge = ({genre}) => {
    const {name, id} = genre
    const navigate = useNavigate()

    return (
        <div className={styles.badge} onClick={() => navigate(`/genres/${id}`)}>
            {name}
        </div>
    );
};