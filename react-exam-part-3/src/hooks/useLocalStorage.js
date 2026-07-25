import { useCallback, useState } from "react";

const readValue = (key, initialValue) => {
  if (typeof window === "undefined") {
    return initialValue;
  }

  try {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  } catch (err) {
    console.error(`localStorage-დან წაკითხვის შეცდომა key="${key}":`, err);
    return initialValue;
  }
};

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() =>
    readValue(key, initialValue),
  );

  const setValue = useCallback(
    (value) => {
      setStoredValue((prev) => {
        const valueStore = value instanceof Function ? value(prev) : value;

        try {
          window.localStorage.setItem(key, JSON.stringify(valueStore));
        } catch (err) {
          console.error(`localStorage-ში ჩაწერის შეცდომა key="${key}":`, err);
        }
        return valueStore;
      });
    },
    [key],
  );

  const removeValue = useCallback(() => {
    try {
      window.localStorage.removeItem(key);
    } catch (err) {
      console.error(`localStorage-დან წაშლის შეცდომა key="${key}":`, err);
    }
    setStoredValue(initialValue);
  }, [key, initialValue]);

  return [storedValue, setValue, removeValue];
};

export default useLocalStorage;
