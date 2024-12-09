import { useState } from "react";

type SetValue<T> = (newValue: T | ((prevValue: T) => T)) => void;

const useLocalStorage = <T extends string | Record<string, unknown>>(
  key: string,
  initialValue: T | null
): [T | null, SetValue<T | null>, () => void] => {
  const storedValue = localStorage.getItem(key);
  const [value, setValue] = useState<T | null>(
    storedValue ? JSON.parse(storedValue) : initialValue
  );

  const updateValue: SetValue<T | null> = (newValue) => {
    setValue((prevValue) => {
      const finalValue =
        typeof newValue === "function" ? newValue(prevValue) : newValue;
      localStorage.setItem(key, JSON.stringify(finalValue));
      return finalValue;
    });
  };

  const clearValue = () => {
    setValue(null);
    localStorage.removeItem(key);
  };

  return [value, updateValue, clearValue];
};

export default useLocalStorage;
