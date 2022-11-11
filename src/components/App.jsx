import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Loader from './Loader/Loader';
import Navigation from './Navigation/Navigation';

const HomePage = lazy(() =>
  import('./HomePage/HomePage' /* webpackChunkName: "homepage" */)
);
const MovieDetailsPage = lazy(() =>
  import(
    './MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "moviedetailspage" */
  )
);
const MoviesPage = lazy(() =>
  import('./MoviesPage/MoviesPage' /* webpackChunkName: "moviespage" */)
);
const Cast = lazy(() => import('./Cast/Cast' /* webpackChunkName: "cast" */));
const Reviews = lazy(() =>
  import('./Reviews/Reviews' /* webpackChunkName: "reviews" */)
);

export const App = () => {
  return (
    <>
      <Navigation />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/movies" element={<MoviesPage />} />

          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </>
  );
};
