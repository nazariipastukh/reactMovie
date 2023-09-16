import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts";
import {MoviesPage, GenresPage, MovieInfoPage} from "../pages";
import {MoviesByGenrePage} from "../pages";
import {SearchResults} from "../components/Search/SearchResults";
import {MainPage} from "../pages/MainPage/MainPage";

export const router = createBrowserRouter([
    {
        path: '',
        element: <MainLayout/>,
        children: [
            {
              path:'/',
              element:<MainPage/>
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