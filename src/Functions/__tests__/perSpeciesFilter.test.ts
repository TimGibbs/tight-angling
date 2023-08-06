import { perSpeciesFilter } from '../perSpeciesFilter'; 
import { ScoredFish } from '../../Types/Types'; 

describe('perSpeciesFilter', () => {
  it('should return the original fish array when maxPerSpecies is null', () => {
    // Arrange
    const fish: ScoredFish[] = [
      { angler: 'John Doe', fishType: 'BASS', location: 'Boat', weightKg: 3, units: 'Metric', score: 43 },
      { angler: 'Jane Smith', fishType: 'ANGLER FISH', location: 'Shore', weightLb: 8, weightOz: 0, units: 'Imperial', score: 73 },
      // Add more scored fish objects as needed
    ];
    const maxPerSpecies: number | null = null;

    // Act
    const result = perSpeciesFilter(fish, maxPerSpecies);

    // Assert
    expect(result).toEqual(fish); // Since maxPerSpecies is null, the function should return the original fish array
  });

  it('should filter fish species based on maxPerSpecies', () => {
    // Arrange
    const fish: ScoredFish[] = [
      { angler: 'John Doe', fishType: 'BASS', location: 'Boat', weightKg: 3, units: 'Metric', score: 43 },
      { angler: 'Jane Smith', fishType: 'ANGLER FISH', location: 'Shore', weightLb: 8, weightOz: 0, units: 'Imperial', score: 73 },
      { angler: 'Mike Johnson', fishType: 'BASS', location: 'Shore', weightKg: 5, units: 'Metric', score: 65 },
      { angler: 'Sarah Brown', fishType: 'ANGLER FISH', location: 'Boat', weightLb: 10, weightOz: 0, units: 'Imperial', score: 85 },
      // Add more scored fish objects as needed
    ];
    const maxPerSpecies: number | null = 1;

    // Act
    const result = perSpeciesFilter(fish, maxPerSpecies);

    // Assert
    expect(result).toEqual([
      { angler: 'Sarah Brown', fishType: 'ANGLER FISH', location: 'Boat', weightLb: 10, weightOz: 0, units: 'Imperial', score: 85 },
      { angler: 'Mike Johnson', fishType: 'BASS', location: 'Shore', weightKg: 5, units: 'Metric', score: 65 },
    ]);
    // The function should filter and return only the top-scoring fish of each species (maxPerSpecies = 1).
  });

  it('should handle cases where maxPerSpecies exceeds the number of available species', () => {
    // Arrange
    const fish: ScoredFish[] = [
      { angler: 'Jane Smith', fishType: 'ANGLER FISH', location: 'Shore', weightLb: 8, weightOz: 0, units: 'Imperial', score: 73 },
      { angler: 'John Doe', fishType: 'BASS', location: 'Boat', weightKg: 3, units: 'Metric', score: 43 },
      // Add more scored fish objects as needed
    ];
    const maxPerSpecies: number | null = 5; // maxPerSpecies is greater than the number of species available.

    // Act
    const result = perSpeciesFilter(fish, maxPerSpecies);

    // Assert
    expect(result).toEqual(fish); // Since maxPerSpecies exceeds the number of species available, it should return the original fish array.
  });
});
