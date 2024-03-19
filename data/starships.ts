import { providerRequest } from '@/lib/request';

const ENDPOINT = 'starships';

export const getStarships = async () => {
  const response = await providerRequest(ENDPOINT);
  return response;
};

export const getStarship = async (id: string) => {
  const response = await providerRequest(`${ENDPOINT}/${id}`);
  return response;
};