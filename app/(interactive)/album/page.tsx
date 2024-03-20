import { redirect } from 'next/navigation';

export default async function AlbumPage() {
  await redirect('/album/films');
}
