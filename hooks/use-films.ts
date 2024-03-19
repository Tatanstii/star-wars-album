import { getFilms } from '@/data/films';
import { Film } from '@/types/album';
import { useEffect, useState } from 'react';

export default function useFilms() {
  const [films, setFilms] = useState<Film[]>([]);

  useEffect(() => {
    if (!films.length) {
      getFilms().then(() => {
        setFilms(films);
      });
    }
  }, [films.length, films]);

  return {
    films,
  };
}
