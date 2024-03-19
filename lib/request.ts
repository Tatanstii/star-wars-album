import { STAR_WARS_API_URL } from './const';

export const providerRequest = async (url: string, options?: RequestInit) => {
  const response = await fetch(`${STAR_WARS_API_URL}/${url}`, options);
  const data = await response.json();

  return data;
};
