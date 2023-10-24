import { Items } from '../types/Items'

export function getMaxValues(items: Items): number[] {
    const maxValues: number[] = []

    for (let k: number = 0; k < items[0].length; k++) {
        maxValues.push(0)
    }

    for (let i: number = 0; i < items.length; i++) {
        for (let j: number = 0; j < items[i].length; j++) {
            if (items[i][j] > maxValues[j]) maxValues[j] = items[i][j]
        }
    }

    return maxValues
}
