export interface ScoreAndCount {
    score: number;
    count: number;
  }
  
  export const orderByScoreThenCountDescending = (a: ScoreAndCount, b: ScoreAndCount): number => {
    const { score: scoreA, count: countA } = a;
    const { score: scoreB, count: countB } = b;
  
    if (scoreA !== scoreB) {
      return scoreB - scoreA;
    }
  
    return countB - countA;
  };
  