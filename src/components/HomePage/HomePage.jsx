import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as moviesApi from '../../services/movies-api';
import s from './HomePage.module.css';

const HomePage = () => {
  const location = useLocation();
  const [films, setFilms] = useState(null);

  useEffect(() => {
    moviesApi.getTrendingMovies().then(setFilms);
  }, []);

  return (
    <>
      <h1 className={s.heading}>Афіша</h1>

      {films && (
        <ol className={s.list}>
          {films.map(({ id, title, poster_path }) => (
            <li key={id} className={s.item}>
              <Link
                to={`movies/${id}`}
                state={{ from: location }}
                className={s.link}
              >
                <h5 className={s.title}>{title}</h5>
              </Link>
            </li>
          ))}
        </ol>
      )}
    </>
  );
};

export default HomePage;
