import { groupBy } from './groupBy'; 

describe('groupBy', () => {
  it('should group elements by the given function', () => {
    // Arrange
    const inputArray = [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
      { id: 3, name: 'Alice' },
      { id: 4, name: 'Charlie' },
      { id: 5, name: 'Bob' },
    ];

    // Act
    const result = groupBy(inputArray, (item) => item.name);

    // Assert
    expect(result).toEqual({
      Alice: [
        { id: 1, name: 'Alice' },
        { id: 3, name: 'Alice' },
      ],
      Bob: [
        { id: 2, name: 'Bob' },
        { id: 5, name: 'Bob' },
      ],
      Charlie: [
        { id: 4, name: 'Charlie' },
      ],
    });
  });

  it('should handle empty input array', () => {
    // Arrange
    const inputArray: any[] = [];

    // Act
    const result = groupBy(inputArray, (item) => item.someProperty);

    // Assert
    expect(result).toEqual({});
  });

  it('should group elements by custom logic', () => {
    // Arrange
    const inputArray = [
      { id: 1, value: 10 },
      { id: 2, value: 20 },
      { id: 3, value: 30 },
      { id: 4, value: 40 },
    ];

    // Act
    const result = groupBy(inputArray, (item) => {
      if (item.value < 30) return 'small';
      return 'large';
    });

    // Assert
    expect(result).toEqual({
      small: [
        { id: 1, value: 10 },
        { id: 2, value: 20 },
      ],
      large: [
        { id: 3, value: 30 },
        { id: 4, value: 40 },
      ],
    });
  });
});
