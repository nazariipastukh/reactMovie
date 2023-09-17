import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts";
import {MoviesPage, GenresPage, MovieInfoPage, MoviesByGenrePage, MainPage} from "../pages";
import {SearchResults} from "../components";

export const router = createBrowserRouter([
    {
        path: '',
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <MainPage/>
            },
            {
                path: 'movies',
                element: <MoviesPage/>
            },
            {
                path: 'search/:inputValue',
                element: <SearchResults/>
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