import { orderByScoreThenCountDescending, ScoreAndCount } from '../orderByScoreThenCountDescending';

describe('orderByScoreThenCountDescending', () => {
  it('should return positive value when b has higher score', () => {
    // Arrange
    const a: ScoreAndCount = { score: 90, count: 10 };
    const b: ScoreAndCount = { score: 100, count: 5 };

    // Act
    const result = orderByScoreThenCountDescending(a, b);

    // Assert
    expect(result).toBeGreaterThan(0);
  });

  it('should return negative value when a has higher score', () => {
    // Arrange
    const a: ScoreAndCount = { score: 100, count: 5 };
    const b: ScoreAndCount = { score: 90, count: 10 };

    // Act
    const result = orderByScoreThenCountDescending(a, b);

    // Assert
    expect(result).toBeLessThan(0);
  });

  it('should return negative value when b has equal score and lower count', () => {
    // Arrange
    const a: ScoreAndCount = { score: 100, count: 10 };
    const b: ScoreAndCount = { score: 100, count: 5 };

    // Act
    const result = orderByScoreThenCountDescending(a, b);

    // Assert
    expect(result).toBeLessThan(0);
  });

  it('should return positive value when a has equal score and lower count', () => {
    // Arrange
    const a: ScoreAndCount = { score: 100, count: 5 };
    const b: ScoreAndCount = { score: 100, count: 10 };

    // Act
    const result = orderByScoreThenCountDescending(a, b);

    // Assert
    expect(result).toBeGreaterThan(0);
  });

  it('should return positive value when b has higher score and equal count', () => {
    // Arrange
    const a: ScoreAndCount = { score: 90, count: 10 };
    const b: ScoreAndCount = { score: 100, count: 10 };

    // Act
    const result = orderByScoreThenCountDescending(a, b);

    // Assert
    expect(result).toBeGreaterThan(0);
  });

  it('should return negative value when a has higher score and equal count', () => {
    // Arrange
    const a: ScoreAndCount = { score: 100, count: 10 };
    const b: ScoreAndCount = { score: 90, count: 10 };

    // Act
    const result = orderByScoreThenCountDescending(a, b);

    // Assert
    expect(result).toBeLessThan(0);
  });

  it('should return 0 when a and b have equal score and count', () => {
    // Arrange
    const a: ScoreAndCount = { score: 100, count: 10 };
    const b: ScoreAndCount = { score: 100, count: 10 };

    // Act
    const result = orderByScoreThenCountDescending(a, b);

    // Assert
    expect(result).toBe(0);
  });
});
