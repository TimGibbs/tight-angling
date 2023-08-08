import { renderHook, act } from '@testing-library/react';
import useLocalStorage from '../useLocalStorage';

test('should initialize with initial value from localStorage', () => {
  const key = 'testKey';
  const initialValue = 'initialValue';

  // Set an item in localStorage to simulate a previously stored value
  localStorage.setItem(key, JSON.stringify(initialValue));

  // Render the hook
  const { result } = renderHook(() => useLocalStorage(key, 'default'));

  // Check if the hook returns the initial value from localStorage
  expect(result.current[0]).toBe(initialValue);
});

test('should set and get value from localStorage', () => {
  const key = 'testKey';
  const initialValue = 'initialValue';

  // Render the hook
  const { result } = renderHook(() => useLocalStorage(key, initialValue));

  // Check if the hook returns the initial value
  expect(result.current[0]).toBe(initialValue);

  // Update the value using the setter function
  const newValue = 'newValue';
  act(() => {
    result.current[1](newValue);
  });

  // Check if the hook now returns the updated value
  expect(result.current[0]).toBe(newValue);

  // Check if the value is stored in localStorage
  const storedValue = localStorage.getItem(key);
  expect(storedValue).toBe(JSON.stringify(newValue));
});
