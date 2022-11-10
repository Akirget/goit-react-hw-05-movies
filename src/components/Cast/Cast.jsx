import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getCast } from 'api/api';
import styles from './Cast.module.css';
import { noFoto } from 'components/Image/image';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  const fetchCast = async () => {
    try {
      const actors = await getCast(movieId);
      setCast(actors);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCast();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <ul className={styles.list}>
        {cast.map(({ id, name, character, profile_path }) => (
          <li key={id} className={styles.item}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500${profile_path}`
                  : noFoto
              }
              alt="img"
              className={styles.img}
            />
            <div>
              <p className={styles.name}>{name}</p>
              <p className={styles.text}>Character: {character}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cast;
