import {useSearchParams} from "react-router-dom";
import {Pagination} from "@mui/material";
import styles from "../../pages/MoviesPage/MoviesPage.module.css";

export const PaginationComponent = ({pages}) => {
    const [query, setQuery] = useSearchParams();
    const currentPage = +(query.get("page")) || 1;

    const handlePageChange = (event, newPage) => {
        setQuery({page: newPage.toString()});
    };

    if(pages > 500){
        pages = 500
    }

    return (
        <div className={styles.pagination}>
            <Pagination
                page={currentPage}
                count={pages}
                onChange={handlePageChange}
            />
        </div>
    );
};