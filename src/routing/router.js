import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts";
import MoviesPage from "../pages/MoviesPage/MoviesPage";
import GenresPage from "../pages/GenresPage/GenresPage";

export const router = createBrowserRouter([
    {
        path: '',
        element: <MainLayout/>,
        children: [
            {
                path: 'movies',
                element: <MoviesPage/>
            },
            {
                path: 'genres',
                element: <GenresPage/>
            }
        ]
    }
])