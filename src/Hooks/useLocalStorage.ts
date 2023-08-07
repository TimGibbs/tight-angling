import { useState } from 'react';

type SetValue<T> = T | ((prevValue: T) => T);

function useLocalStorage<T>(key: string, initialValue: T): [T, (value: SetValue<T>) => void] {
  // Get initial value from local storage if exists, otherwise use initialValue
  const storedValue = localStorage.getItem(key);
  const initialStoredValue = storedValue ? JSON.parse(storedValue) : initialValue;

  // Create a state to store the current value
  const [value, setValue] = useState<T>(initialStoredValue);

  // Save the value to local storage whenever it changes
  const setStoredValue = (newValue: SetValue<T>) => {
    const updatedValue = typeof newValue === 'function' ? (newValue as Function)(value) : newValue;
    setValue(updatedValue);
    localStorage.setItem(key, JSON.stringify(updatedValue));
  };

  return [value, setStoredValue];
}

export default useLocalStorage;
