import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {genresActions} from "../../../redux/slices";
import {Genre} from "../Genre/Genre";
import styles from './GenresComponent.module.css'

export const GenresComponent = () => {
    const dispatch = useDispatch()
    const {genres} = useSelector(state => state.genres)

    useEffect(() => {
        dispatch(genresActions.getAll())
    }, [dispatch])

    return (
        <div className={styles.genresList}>
            <div className={styles.genres}>
                {
                    genres.map(genre => <Genre key={genre.id} genre={genre}/>)
                }
            </div>
        </div>
    );
};