import {useSearchParams} from "react-router-dom";
import {Pagination} from "@mui/material";
import styles from "../../pages/MoviesPage/MoviesPage.module.css";

export const PaginationComponent = () => {
    const [query, setQuery] = useSearchParams()

    const maxPages = 500;

    return (
        <div className={styles.pagination}>
            <Pagination
                defaultPage={+query.get('page')}
                count={maxPages}
                onChange={(e, page) => setQuery({page: page.toString()})}
            />
        </div>
    );
};