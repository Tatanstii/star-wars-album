import { getStarships } from '@/data/starships';
import StarhsipsAlbum from './components/starships-album';

export default async function StarshipsPage() {
  const placeholderItems = await getStarships();

  return <StarhsipsAlbum placeholderItems={placeholderItems} />;
}
