import { Items } from './types/Items'
import { Weights } from './types/Weights'
import { normalize, normalizeVector } from './normalize'
import { sigma } from './sigma'

const testData = [
    [70, 10, 1983000, 0.1],
    [55.5, 7, 2983000, 0.1],
]

const testData1 = [
    [82, 16, 7945000, 0.1],
    [80, 16, 11945000, 0.1],
]

const testData2 = [
    [89, 10, 12992000, 0.1],
    [81, 10, 12992000, 0.1],
]

const testData3 = [
    [11, 75, 12992000, 0.1],
    [19, 90, 12992000, 0.1],
]

const testWeights = [0.8, 0.6, 0.4, 1]

export function AuctionResult(items: Items, weights: Weights) {
    items = normalize(items, 'easy')
    const resultTable: number[] = []

    for (let i = 0; i < items.length; i++) {
        let result: number = sigma(items[i], weights)

        resultTable.push(result)
    }

    const normalResultTable = normalizeVector(resultTable)
    console.log(normalResultTable)

    return normalResultTable
}

AuctionResult(testData, testWeights)
AuctionResult(testData1, testWeights)
AuctionResult(testData2, testWeights)
AuctionResult(testData3, testWeights)