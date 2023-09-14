import {Link, NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Switch, LinearProgress, Box} from "@mui/material";
import {themeActions} from "../../redux/slices";
import {UserInfo} from "../User";
import styles from './Header.module.css'

export const Header = () => {
    const dispatch = useDispatch()
    const {themeCheck} = useSelector(state => state.theme);
    const {isLoading} = useSelector(state => state.loading)

    return (
        <div>
            <div className={`${styles.header} ${themeCheck ? '' : styles.light}`}>
                <div className={styles.headerLogo}>
                    <Link to={'/'}>
                        {
                            themeCheck ?
                                (<img src={'https://i.ibb.co/Rv3NtRQ/Screenshot-115.jpg'}
                                      alt={'headerImage'}/>)
                                :
                                (<img src={'https://i.ibb.co/ypTVCZR/Screenshot-116-removebg-preview.png'}
                                      alt={'headerImage'}/>)
                        }
                    </Link>
                </div>
                <div className={`${styles.headerLinks} ${themeCheck ? '' : styles.lightLinks}`}>
                    <NavLink to={'/'}>Main Page</NavLink>
                    <NavLink to={'/movies'}>Movies</NavLink>
                    <NavLink to={'/genres'}>Genres</NavLink>
                </div>
                <div className={styles.switch}>
                    <Switch className={styles.switch}
                            defaultChecked={themeCheck}
                            onClick={() => dispatch(themeActions.changeThemeCheck())}
                    />
                </div>
                <div className={styles.headerUser}>
                    <UserInfo/>
                </div>
            </div>
            {
                isLoading ? (
                    <Box sx={{width: '100%', height: '1vh'}}>
                        <LinearProgress/>
                    </Box>
                ) : (
                    <div style={{height: '1vh'}}></div>
                )
            }
        </div>
    );
};