import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {mainPageActions} from "../../../redux/slices";
import {MainPageCard} from "./MainPageDataCard/MainPageCard";
import styles from './MainPageComponent.module.css'

export const MainPageComponent = () => {
    const dispatch = useDispatch()
    const {popular, topRated, upcoming} = useSelector(state => state.mainPageData)

    useEffect(() => {
        dispatch(mainPageActions.getPopular())
    }, [dispatch])

    useEffect(() => {
        dispatch(mainPageActions.getTopRated())
    }, [dispatch])

    useEffect(() => {
        dispatch(mainPageActions.getUpcoming())
    }, [dispatch])

    return (
        <div className={styles.page}>
            <div>
                <h2 className={styles.info}>Popular</h2>
                <div className={styles.wrapper}>
                    {
                        popular.slice(0, 7).map(movie => <MainPageCard movie={movie}/>)
                    }
                </div>
                <h2 className={styles.info}>Top rated</h2>
                <div className={styles.wrapper}>
                    {
                        topRated.slice(0, 7).map(movie => <MainPageCard movie={movie}/>)
                    }
                </div>
                <h2 className={styles.info}>Upcoming</h2>
                <div className={styles.wrapper}>
                    {
                        upcoming.slice(0, 7).map(movie => <MainPageCard movie={movie}/>)
                    }
                </div>
            </div>
        </div>
    );
};