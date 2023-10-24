import { Item } from './types/Item'
import { Weights } from './types/Weights'

export function sigma(item: Item, weights: Weights): number {
    let result = 0
    for (let i = 0; i < item.length; i++) {
        result += item[i] * weights[i]
    }

    return result
}
