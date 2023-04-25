export const getShortlURLFromApi = async <T>(url: string): Promise<T> => {
  const responce = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
  const data = await responce.json();
  return data;
};
