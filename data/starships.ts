import { providerRequest } from '@/lib/request';
import { Starship } from '@/types/album';

const ENDPOINT = 'starships';

export const getStarships = async (): Promise<Starship[]> => {
  const response = await providerRequest(ENDPOINT);
  return response;
};

export const getStarship = async (id: number) => {
  const response = await providerRequest(`${ENDPOINT}/${id}`);
  return response;
};
