import {MoviesList} from "../../components";
import {Pagination} from "@mui/material";
import styles from './MoviesPage.module.css'

export const MoviesPage = () => {
    return (
        <div>
            <div className={styles.pagination}>
                <Pagination
                    // defaultPage={+query.get('page')}
                    // count={pages}
                    // onChange={(e, page) => setQuery({page: page.toString()})}
                />
            </div>
            <MoviesList/>
            <div className={styles.pagination}>
                <Pagination
                    // defaultPage={+query.get('page')}
                    // count={pages}
                    // onChange={(e, page) => setQuery({page: page.toString()})}
                />
            </div>
        </div>
    );
};