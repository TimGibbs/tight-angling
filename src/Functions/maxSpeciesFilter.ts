import { ScoredFish } from "../Types/Types";
import { groupBy } from "./groupBy";

export function maxSpeciesFilter(fish: ScoredFish[], maxSpecies: number | null): ScoredFish[] {
  if (!maxSpecies) {
    return fish;
  }

  const grouped = groupBy(fish, (x) => x.fishType);

  const scores: { key: string; value: number }[] = Object.entries(grouped).map(
    ([species, fishList]) => ({
      key: species,
      value: fishList.reduce((acc, curr) => acc + curr.score, 0),
    })
  );

  const sortedScores = scores.sort((a, b) => b.value - a.value).slice(0, maxSpecies);

  const ret = sortedScores.flatMap((score) => grouped[score.key]);

  return ret.sort((a, b) => {
    const x = a.fishType.localeCompare(b.fishType);
    if (x === 0) return b.score - a.score;
    return x;
  });
}
