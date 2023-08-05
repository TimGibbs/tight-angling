import { maxFishFilter } from './maxFishFilter'; // Update the import path with the correct file path
import { ScoredFish } from '../Types/Types'; // Update the import path with the correct file path for the types

describe('maxFishFilter', () => {
  it('should return the original fish array when maxFish is null', () => {
    // Arrange
    const fish: ScoredFish[] = [
      { angler: 'John Doe', fishType: 'BASS', location: 'Boat', weightKg: 3, units: 'Metric', score: 43 },
      { angler: 'Jane Smith', fishType: 'ANGLER FISH', location: 'Shore', weightLb: 8, weightOz: 0, units: 'Imperial', score: 73 },
      // Add more scored fish objects as needed
    ];
    const maxFish: number | null = null;

    // Act
    const result = maxFishFilter(fish, maxFish);

    // Assert
    expect(result).toEqual(fish); // Since maxFish is null, the function should return the original fish array
  });

  it('should filter fish based on maxFish', () => {
    // Arrange
    const fish: ScoredFish[] = [
      { angler: 'John Doe', fishType: 'BASS', location: 'Boat', weightKg: 3, units: 'Metric', score: 43 },
      { angler: 'Jane Smith', fishType: 'ANGLER FISH', location: 'Shore', weightLb: 8, weightOz: 0, units: 'Imperial', score: 73 },
      { angler: 'Mike Johnson', fishType: 'BASS', location: 'Shore', weightKg: 5, units: 'Metric', score: 65 },
      { angler: 'Sarah Brown', fishType: 'ANGLER FISH', location: 'Boat', weightLb: 10, weightOz: 0, units: 'Imperial', score: 85 },
      // Add more scored fish objects as needed
    ];
    const maxFish: number | null = 2;

    // Act
    const result = maxFishFilter(fish, maxFish);

    // Assert
    expect(result).toEqual([
      { angler: 'Sarah Brown', fishType: 'ANGLER FISH', location: 'Boat', weightLb: 10, weightOz: 0, units: 'Imperial', score: 85 },
      { angler: 'Jane Smith', fishType: 'ANGLER FISH', location: 'Shore', weightLb: 8, weightOz: 0, units: 'Imperial', score: 73 },
    ]);
    // The function should filter and return the top `maxFish` fish based on their scores.
  });

  it('should handle cases where maxFish exceeds the total number of available fish', () => {
    // Arrange
    const fish: ScoredFish[] = [
      { angler: 'John Doe', fishType: 'BASS', location: 'Boat', weightKg: 3, units: 'Metric', score: 43 },
      { angler: 'Jane Smith', fishType: 'ANGLER FISH', location: 'Shore', weightLb: 8, weightOz: 0, units: 'Imperial', score: 73 },
      // Add more scored fish objects as needed
    ];
    const maxFish: number | null = 5; // maxFish is greater than the total number of fish available.

    // Act
    const result = maxFishFilter(fish, maxFish);

    // Assert
    expect(result).toEqual(fish); // Since maxFish exceeds the total number of fish available, it should return the original fish array.
  });
});
