import { providerRequest } from '@/lib/request';

const ENDPOINT = 'films';

export const getFilms = async () => {
  const response = await providerRequest(ENDPOINT);
  return response;
};

export const getFilm = async (id: string) => {
  const response = await providerRequest(`${ENDPOINT}/${id}`);
  return response;
};
