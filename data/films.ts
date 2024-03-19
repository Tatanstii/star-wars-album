import { providerRequest } from '@/lib/request';
import { Film } from '@/types/album';

const ENDPOINT = 'films';

export const getFilms = async () => {
  const response = await providerRequest(ENDPOINT);
  return response;
};

export const getFilm = async (id: number): Promise<Film> => {
  const response = await providerRequest(`${ENDPOINT}/${id}`);
  return response;
};
