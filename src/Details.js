import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Details.module.css';

export default function Details() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [marvel, setmarvel] = useState([]);

  const getMarvel = async () => {
    const response = await (
      await fetch(
        `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}`
      )
    ).json();
    setmarvel(response.data.results);
    setLoading(false);
  };

  useEffect(() => {
    getMarvel();
  }, []);

  return (
    <>
      {loading && <div className={styles.center}>Loading...</div>}
      {!loading && (
        <div className={styles.container}>
          <ul className={styles.card}>
            {marvel?.map((marvel, index) => (
              <li key={marvel.id}>
                <div className={styles.img_container}>
                  <img
                    className={styles.img}
                    src={`${marvel.thumbnail.path}.jpg`}
                    alt={`marvel_character_img_${index + 1}`}
                  />
                </div>
                <h1 className={styles.title}>{marvel.name}</h1>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
