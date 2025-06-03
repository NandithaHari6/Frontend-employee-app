function useLocalStorage(key: string, value: string):[string,(string: any) => void] {
  let curr = localStorage.getItem(key);
  function setter(value: string) {
    localStorage.setItem(key, value);
  }
  if (curr) {
    return [curr, setter];
  } else {
    localStorage.setItem(key, value);
    return [value, setter];
  }
}
export default useLocalStorage;
