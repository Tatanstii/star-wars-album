import { getPeople } from '@/data/people';
import CharacterAlbum from './components/characters-album';

export default async function CharactersPage() {
  const placeholderItems = await getPeople();

  return <CharacterAlbum placeholderItems={placeholderItems} />;
}
