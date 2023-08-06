import { act, renderHook } from '@testing-library/react';
import useViewport from '../useViewPort'; 

describe('useViewport', () => {
  it('should return the initial viewport dimensions', () => {
    // Arrange & Act
    const { result } = renderHook(() => useViewport());

    // Assert
    expect(result.current.width).toBe(window.innerWidth);
    expect(result.current.height).toBe(window.innerHeight);
  });

  it('should update viewport dimensions on window resize', () => {
    // Arrange
    const { result } = renderHook(() => useViewport());
    const newWidth = 800;
    const newHeight = 600;

    // Act
    act(() => {
      // Simulate window resize event
      Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: newWidth });
      Object.defineProperty(window, 'innerHeight', { writable: true, configurable: true, value: newHeight });

      window.dispatchEvent(new Event('resize'));
    });

    // Assert
    expect(result.current.width).toBe(newWidth);
    expect(result.current.height).toBe(newHeight);
  });

  it('should unsubscribe from window resize events on unmount', () => {
    // Arrange
    const removeEventListenerMock = jest.spyOn(window, 'removeEventListener');
    const { unmount } = renderHook(() => useViewport());

    // Act
    unmount();

    // Assert
    expect(removeEventListenerMock).toHaveBeenCalledTimes(1);
    expect(removeEventListenerMock).toHaveBeenCalledWith('resize', expect.any(Function));
    removeEventListenerMock.mockRestore();
  });
});
