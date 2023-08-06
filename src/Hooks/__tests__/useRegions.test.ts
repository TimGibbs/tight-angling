import { renderHook } from '@testing-library/react';
import useRegions from '../useRegions'; 
import { Region } from '../../Types/Types'; 

jest.mock('../../Data/Regions', () => ({
  Regions: [
    {
      name: 'Mock Region 1',
      letter: 'A',
      values: [
        // Add mock values for testing
      ],
    },
    {
      name: 'Mock Region 2',
      letter: 'B',
      values: [
        // Add mock values for testing
      ],
    },
    // Add more mock regions as needed
  ],
}));

describe('useRegions', () => {
  it('should return an object of regions with letter keys', () => {
    // Now render the hook
    const { result } = renderHook(() => useRegions());

    // Assert
    expect(result.current).toEqual({
      A: {
        name: 'Mock Region 1',
        letter: 'A',
        values: [
          // Add mock values for testing
        ],
      },
      B: {
        name: 'Mock Region 2',
        letter: 'B',
        values: [
          // Add mock values for testing
        ],
      },
      // Add other region keys as needed
    });
  });
});
