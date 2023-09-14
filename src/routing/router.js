import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts";
import {MoviesPage, GenresPage, MovieInfoPage} from "../pages";
import {MoviesByGenrePage} from "../pages";

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
                path: 'movies/:id',
                element: <MovieInfoPage/>
            },
            {
                path: 'genres',
                element: <GenresPage/>,
                children: [
                    {
                        path: ':id',
                        element: <MoviesByGenrePage/>
                    }
                ]
            }
        ]
    }
])