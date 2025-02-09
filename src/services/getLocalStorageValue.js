
export const getLocalStorageValue = (key) => {

  const data = window.localStorage.getItem(key);

  return data ? JSON.parse(data) : undefined;

}
