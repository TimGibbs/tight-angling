import { Fish, Region } from "../Types/Types";

export function scoreFish(fish: Fish, region: Region): number {
  const values = region.values.find((f) => f.fishType === fish.fishType);

  if (!values) return 0;

  const weightAsDecimal = (fish: Fish): number => {
    if (fish.units === "Metric") {
      return fish.weightKg;
    } else if (fish.units === "Imperial") {
      return fish.weightLb + fish.weightOz / 16;
    }
    return 0;
  };

  const calculateScore = (weight: number, refWeight: number): number => {
    return Math.round((weight / refWeight) * 100);
  };

  const refWeight =
    fish.location === "Boat" && fish.units === "Metric"
      ? values.boatKg
      : fish.location === "Shore" && fish.units === "Metric"
      ? values.shoreKg
      : fish.location === "Boat" && fish.units === "Imperial"
      ? values.boatLb
      : fish.location === "Shore" && fish.units === "Imperial"
      ? values.shoreLb
      : 0;
  const weight = weightAsDecimal(fish);

  return calculateScore(weight, refWeight);
}
