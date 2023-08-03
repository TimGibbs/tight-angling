export const unitsArray = ['Metric','Imperial'] as const

export function isUnit(str :string) : str is Unit {
    return unitsArray.includes(str as Unit);
}

export type Unit  = typeof unitsArray[number]