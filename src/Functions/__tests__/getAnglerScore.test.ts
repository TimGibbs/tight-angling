import { getAnglerScore } from '../getAnglerScore'; 
import { Angler, Limitations, Region, ScoredFish } from '../../Types/Types'; 

// Mock region values for testing
const mockRegion: Region = {
  name: 'Mock Region',
  letter: 'M',
  values: [
    { fishType: 'BASS', boatKg: 7, shoreKg: 4, boatLb: 15, shoreLb: 8 },
    { fishType: 'ANGLER FISH', boatKg: 10, shoreKg: 5, boatLb: 22, shoreLb: 11 },
    // Add more values for other fish types as needed
  ],
};

describe('getAnglerScore', () => {
  it('should return 0 when the angler has no fish caught', () => {
    // Arrange
    const angler: Angler = {
      name: 'John Doe',
      fish: [],
    };
    const limitations: Limitations = {
      perSpecies: null,
      maxSpecies: null,
      maxFish: null,
    };

    // Act
    const result = getAnglerScore(angler, limitations, mockRegion);

    // Assert
    expect(result).toBe(0); // Since the angler has no fish caught, the score should be 0.
  });

  it('should calculate the score correctly with all limitations set to null', () => {
    // Arrange
    const angler: Angler = {
      name: 'Jane Smith',
      fish: [
        { angler:'Jane Smith', fishType: 'BASS', location: 'Boat', weightKg: 3, units: 'Metric' },
        { angler:'Jane Smith', fishType: 'ANGLER FISH', location: 'Shore', weightLb: 8, weightOz: 0, units: 'Imperial' },
        // Add more caught fish for testing
      ],
    };
    const limitations: Limitations = {
      perSpecies: null,
      maxSpecies: null,
      maxFish: null,
    };

    // Act
    const result = getAnglerScore(angler, limitations, mockRegion);

    // Assert
    expect(result).toBe(116); // The calculated score based on the given caught fish and region values.
  });

  it('should handle all limitations correctly', () => {
    // Arrange
    const angler: Angler = {
      name: 'Mike Johnson',
      fish: [
        { angler:'Mike Johnson',  fishType: 'BASS', location: 'Boat', weightKg: 3, units: 'Metric' },
        { angler:'Mike Johnson', fishType: 'ANGLER FISH', location: 'Shore', weightLb: 8, weightOz: 0, units: 'Imperial' },
        // Add more caught fish for testing
      ],
    };
    const limitations: Limitations = {
      perSpecies: 1, // Only allow one fish per species
      maxSpecies: 1, // Only consider the top-scoring species
      maxFish: 1, // Only consider the top-scoring fish overall
    };

    // Act
    const result = getAnglerScore(angler, limitations, mockRegion);

    // Assert
    expect(result).toBe(73); // The calculated score based on the given caught fish, region values, and limitations.
  });
});
