import { Items } from './types/Items'
import { getMaxValues } from './helpers/getMaxValues'
import { Item } from './types/Item'

export function normalizeVector(vector: Item) {
    let maxValue = 0
    for (let i = 0; i < vector.length; i++) {
        if (vector[i] > maxValue) maxValue = vector[i]
    }

    for (let i = 0; i < vector.length; i++) {
        vector[i] = vector[i] / maxValue
    }

    return vector
}

export function normalize(items: Items, type?: 'easy'): Items {
    if (type === 'easy') {
        return easyNormalization(items)
    }

    return easyNormalization(items)
}

function easyNormalization(items: Items): Items {
    const maxValues = getMaxValues(items)

    for (let i = 0; i < items.length; i++) {
        for (let j = 0; j < items[i].length; j++) {
            items[i][j] = items[i][j] / maxValues[j]
        }
    }

    return items
}
