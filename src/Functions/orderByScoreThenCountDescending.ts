
export interface ScoreAndCount {
    score: number, 
    count: number,
}

export function orderByScoreThenCountDescending(a: ScoreAndCount, b: ScoreAndCount): number {
    if (a.score !== b.score) {
        return b.score - a.score;
    }
    return b.count - a.count;
}
