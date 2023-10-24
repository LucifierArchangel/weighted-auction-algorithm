import { Item } from './types/Item'
import { Weights } from './types/Weights'

export function sigma(item: Item, weights: Weights): number {
    let result: number = 0
    for (let i: number = 0; i < item.length; i++) {
        result += item[i] * weights[i]
    }

    return result
}
