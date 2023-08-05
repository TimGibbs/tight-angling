import { scoreFish } from './scoreFish'; // Update the import path with the correct file path
import { Fish, Region, RegionValues } from '../Types/Types'; // Update the import path with the correct file path for the types

describe('scoreFish', () => {
  const mockRegion: Region = {
    name: 'Mock Region',
    letter: 'M',
    values: [
      { fishType: 'ANGLER FISH', boatKg: 10, shoreKg: 5, boatLb: 22, shoreLb: 11 },
      { fishType: 'BASS', boatKg: 7, shoreKg: 4, boatLb: 15, shoreLb: 8 },
      { fishType: 'BREAM - Black', boatKg: 3, shoreKg: 2, boatLb: 6, shoreLb: 4 },
      // Add more values for other fish types as needed
    ],
  };

  it('should calculate the score correctly for Metric units on Boat', () => {
    // Arrange
    const fish: Fish = {
      angler: 'John Doe',
      fishType: 'BASS',
      location: 'Boat',
      weightKg: 3,
      units: 'Metric',
    };

    // Act
    const result = scoreFish(fish, mockRegion);

    // Assert
    expect(result).toBe(43); // The score for Bass (3 kg) on Boat with region values (7 kg) is 43
  });

  it('should calculate the score correctly for Imperial units on Shore', () => {
    // Arrange
    const fish: Fish = {
      angler: 'Jane Smith',
      fishType: 'ANGLER FISH',
      location: 'Shore',
      weightLb: 8,
      weightOz: 0,
      units: 'Imperial',
    };

    // Act
    const result = scoreFish(fish, mockRegion);

    // Assert
    expect(result).toBe(73); // The score for Angler Fish (8 lb) on Shore with region values (11 lb) is 73
  });
});
