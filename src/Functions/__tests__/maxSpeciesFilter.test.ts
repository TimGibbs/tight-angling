import { maxSpeciesFilter } from '../maxSpeciesFilter'; 
import { ScoredFish } from '../../Types/Types'; 

describe('maxSpeciesFilter', () => {
  it('should return the original fish array when maxSpecies is null', () => {
    // Arrange
    const fish: ScoredFish[] = [
      { angler: 'John Doe', fishType: 'BASS', location: 'Boat', weightKg: 3, units: 'Metric', score: 43 },
      { angler: 'Jane Smith', fishType: 'ANGLER FISH', location: 'Shore', weightLb: 8, weightOz: 0, units: 'Imperial', score: 73 },
      // Add more scored fish objects as needed
    ];
    const maxSpecies: number | null = null;

    // Act
    const result = maxSpeciesFilter(fish, maxSpecies);

    // Assert
    expect(result).toEqual(fish); // Since maxSpecies is null, the function should return the original fish array
  });

  it('should filter fish species based on maxSpecies', () => {
    // Arrange
    const fish: ScoredFish[] = [
      { angler: 'John Doe', fishType: 'BASS', location: 'Boat', weightKg: 3, units: 'Metric', score: 43 },
      { angler: 'Jane Smith', fishType: 'ANGLER FISH', location: 'Shore', weightLb: 8, weightOz: 0, units: 'Imperial', score: 73 },
      { angler: 'Mike Johnson', fishType: 'BASS', location: 'Shore', weightKg: 5, units: 'Metric', score: 65 },
      { angler: 'Sarah Brown', fishType: 'ANGLER FISH', location: 'Boat', weightLb: 10, weightOz: 0, units: 'Imperial', score: 85 },
      // Add more scored fish objects as needed
    ];
    const maxSpecies: number | null = 1;

    // Act
    const result = maxSpeciesFilter(fish, maxSpecies);

    // Assert
    expect(result).toEqual([
      { angler: 'Sarah Brown', fishType: 'ANGLER FISH', location: 'Boat', weightLb: 10, weightOz: 0, units: 'Imperial', score: 85 },
      { angler: 'Jane Smith', fishType: 'ANGLER FISH', location: 'Shore', weightLb: 8, weightOz: 0, units: 'Imperial', score: 73 },
    ]);
    // The function should filter and return the top-scoring species (maxSpecies = 1).
  });

  it('should handle cases where maxSpecies exceeds the number of available species', () => {
    // Arrange
    const fish: ScoredFish[] = [
      { angler: 'Jane Smith', fishType: 'ANGLER FISH', location: 'Shore', weightLb: 8, weightOz: 0, units: 'Imperial', score: 73 },
      { angler: 'John Doe', fishType: 'BASS', location: 'Boat', weightKg: 3, units: 'Metric', score: 43 },
      // Add more scored fish objects as needed
    ];
    const maxSpecies: number | null = 5; // maxSpecies is greater than the number of available species.

    // Act
    const result = maxSpeciesFilter(fish, maxSpecies);

    // Assert
    expect(result).toEqual(fish); // Since maxSpecies exceeds the number of species available, it should return the original fish array.
  });
});
