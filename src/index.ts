import { Items } from './types/Items'
import { Weights } from './types/Weights'
import { normalize, normalizeVector } from './normalize'
import { sigma } from './sigma'
import { Item } from './types/Item'

export function AuctionResult(items: Items, weights: Weights) {
    items = normalize(items, 'easy')
    const resultTable: number[] = []

    for (let i: number = 0; i < items.length; i++) {
        let result: number = sigma(items[i], weights)

        resultTable.push(result)
    }

    const normalResultTable: Item = normalizeVector(resultTable)
    console.log(normalResultTable)

    return normalResultTable
}
