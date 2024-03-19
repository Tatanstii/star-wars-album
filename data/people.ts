import { providerRequest } from '@/lib/request';

const ENDPOINT = 'people';

export const getPeople = async () => {
  const response = await providerRequest(ENDPOINT);
  return response;
};

export const getPerson = async (id: string) => {
  const response = await providerRequest(`${ENDPOINT}/${id}`);
  return response;
};