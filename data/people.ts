import { providerRequest } from '@/lib/request';
import { Character } from '@/types/album';

const ENDPOINT = 'people';

export const getPeople = async (): Promise<Character[]> => {
  const response = await providerRequest(ENDPOINT);
  return response;
};

export const getCharacter = async (id: number) => {
  const response = await providerRequest(`${ENDPOINT}/${id}`);
  return response;
};
