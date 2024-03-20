import { providerRequest } from '@/lib/request';
import { Film } from '@/types/album';

const ENDPOINT = 'films';

export const getFilms = async (): Promise<Film[]> => {
  const response = await providerRequest(ENDPOINT, { method: 'GET' });
  return response;
};

export const getFilm = async (id: number): Promise<Film> => {
  const response = await providerRequest(`${ENDPOINT}/${id}`);
  return response.results;
};
