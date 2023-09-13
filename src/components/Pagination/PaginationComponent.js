import {useSearchParams} from "react-router-dom";
import {Pagination} from "@mui/material";
import styles from "../../pages/MoviesPage/MoviesPage.module.css";

export const PaginationComponent = () => {
    const [query, setQuery] = useSearchParams();
    const maxPages = 500;

    const currentPage = +(query.get("page")) || 1;

    const handlePageChange = (event, newPage) => {
        setQuery({page: newPage.toString()});
    };

    return (
        <div className={styles.pagination}>
            <Pagination
                page={currentPage}
                count={maxPages}
                onChange={handlePageChange}
            />
        </div>
    );
};