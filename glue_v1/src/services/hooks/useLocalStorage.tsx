import { useState } from "react";

type SetValue<T> = (newValue: T | ((prevValue: T) => T)) => void;

const useLocalStorage = <T extends string | Record<string, unknown>>(
  key: string,
  initialValue: T | null
): [T | null, SetValue<T | null>, () => void] => {
  // Retrieve the stored value from localStorage
  const storedValue = localStorage.getItem(key);

  // Initialize state with the retrieved value or use the initial value
  const [value, setValue] = useState<T | null>(
    storedValue ? JSON.parse(storedValue) : initialValue
  );

  // Update localStorage with the new value whenever it changes
  const updateValue: SetValue<T | null> = (newValue) => {
    setValue((prevValue) => {
      const finalValue =
        typeof newValue === "function" ? newValue(prevValue) : newValue;
      localStorage.setItem(key, JSON.stringify(finalValue));
      return finalValue;
    });
  };

  // Clear the value from localStorage
  const clearValue = () => {
    setValue(null);
    localStorage.removeItem(key);
  };

  return [value, updateValue, clearValue];
};

export default useLocalStorage;
