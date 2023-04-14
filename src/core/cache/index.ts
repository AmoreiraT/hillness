export const useStorage = (type: 'local' | 'session') => {
  const storage = type === 'local' ? localStorage : sessionStorage;

  const set = (key: string, value: object | string) => {
    storage.setItem(key, JSON.stringify(value));
  };

  const get = (key: string) => {
    const value = storage.getItem(key);
    if (value) {
      return JSON.parse(value) as string | object;
    }
    return undefined;
  };

  const remove = (key: string) => {
    storage.removeItem(key);
  };

  const clear = () => {
    storage.clear();
  };

  return { set, get, remove, clear } as const;
};
