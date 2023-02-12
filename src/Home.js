import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [marvelList, setMarvelList] = useState([]);

  const getMarvelLists = async () => {
    const response = await (
      await fetch(
        'https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023"'
      )
    ).json();
    setMarvelList(response.data.results);
    setLoading(false);
  };

  useEffect(() => {
    getMarvelLists();
  }, []);

  return (
    <>
      {loading && <div className={styles.center}>Loading...</div>}
      {!loading && (
        <div className={styles.container}>
          <h1 className={styles.title}>Marvel Characters</h1>
          <ul>
            {marvelList?.map((marvel, index) => (
              <li className={styles.list} key={marvel.id}>
                <div className={styles.img_container}>
                  <img
                    className={styles.img}
                    src={`${marvel.thumbnail.path}.jpg`}
                    alt={`marvel_list_img_${index + 1}`}
                  />
                </div>
                <div className={styles.text_container}>
                  <Link to={`/character/${marvel.id}`}>
                    <div>
                      <strong>{marvel.name}</strong>
                    </div>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
