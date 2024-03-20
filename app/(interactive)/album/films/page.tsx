import { getFilms } from '@/data/films';
import FilmsAlbum from './components/films-album';

export default async function FilmsPage() {
  const placeholderItems = await getFilms();

  return (
    <div>
      <FilmsAlbum placeholderItems={placeholderItems} />
    </div>
  );
}
