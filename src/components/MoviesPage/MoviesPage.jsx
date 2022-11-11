import Notiflix from 'notiflix';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import * as moviesApi from '../../services/movies-api';
import s from './MoviesPage.module.css';

const MoviesPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [filmQuery, setFilmQuery] = useState('');
  const [searchedFilms, setSearchedFilms] = useState([]);

  const searchQuery = new URLSearchParams(location.search).get('query');

  const handleChange = e => setFilmQuery(e.target.value.toLowerCase());

  const handleSubmit = e => {
    e.preventDefault();
    if (!filmQuery) return;
    navigate({ ...location, search: `query=${filmQuery}` });
  };

  useEffect(() => {
    if (!searchQuery) return;
    moviesApi
      .searchMovies(searchQuery)
      .then(setSearchedFilms)
      .catch(Notiflix.Notify.warning('Такого фільму не знайдено'));
    setFilmQuery(searchQuery);
  }, [searchQuery]);

  return (
    <>
      <form onSubmit={handleSubmit} className={s.form}>
        <label>
          <input
            className={s.input}
            type="text"
            name="name"
            value={filmQuery}
            onChange={handleChange}
            placeholder="Введіть назву фільма"
          />
        </label>
        <button type="submit" className={s.btn}>
          Пошук
        </button>
      </form>

      {searchedFilms && (
        <ol className={s.list}>
          {searchedFilms.map(({ id, title }) => (
            <li key={id} className={s.item}>
              <Link to={`${id}`} state={{ from: location }} className={s.link}>
                <h5 className={s.title}>{title}</h5>
              </Link>
            </li>
          ))}
        </ol>
      )}
    </>
  );
};

export default MoviesPage;
