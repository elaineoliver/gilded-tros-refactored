import {Item} from './item';

export interface TUpdatedItem extends Item {
    name: string
    sellIn: number // Number of days to sell the item
    quality: number // How valuable the item is: > 0, <= 50
    category: string
    toString: () => string
}

function controlQuality(quality: number) {
    // The Quality of an item is never negative
    if (quality < 0) {
        return 0
    // The Quality of an item is never more than 50
    } else if (quality > 50) {
        return 50
    } else {
        return quality
    }
}

export function updateStandardItem(item: TUpdatedItem): TUpdatedItem {
    const newSellIn = item.sellIn - 1;

    const getQuality = () => {
        // Once the sell by date has passed, Quality degrades twice as fast
        const q = newSellIn < 0 ? item.quality - 2 : item.quality - 1
        return controlQuality(q)
    }

    const newQuality = getQuality()

    return { ...item, sellIn: newSellIn, quality: newQuality }
}

export function updateTastyItem(item: TUpdatedItem): TUpdatedItem {
    const newSellIn = item.sellIn - 1;

    const getQuality = () => {
        // "Good Wine" actually increases in Quality the older it gets
        const q = item.quality + 1
        return controlQuality(q)
    }
    
    const newQuality = getQuality()

    return { ...item, sellIn: newSellIn, quality: newQuality }
}

export function updateLegendaryItem(item: TUpdatedItem): TUpdatedItem {
    // "B-DAWG Keychain", being a legendary item, never has to be sold or decreases in Quality
    const newSellIn = item.sellIn;
    const newQuality = 80

    return { ...item, sellIn: newSellIn, quality: newQuality }
}

export function updateCovettedItem(item: TUpdatedItem): TUpdatedItem {
	// - "Backstage passes" for very interesting conferences increases in Quality as its SellIn value approaches
    const newSellIn = item.sellIn - 1;
    
    const getQuality = () => {
        let q = item.quality

        if (newSellIn < 0) {
            // Quality drops to 0 after the conference
            q = 0
        } else if (newSellIn <= 5) {
            // Quality increases by 3 when there are 5 days or less
            q = item.quality + 3
        } else if (newSellIn <= 10) {
            // Quality increases by 2 when there are 10 days or less
            q = item.quality + 2
        } else {
            q = item.quality + 1
        }

        return controlQuality(q)
    }

    const newQuality = getQuality()

    return {
        ...item,
        sellIn: newSellIn,
        quality: newQuality
    }
}

export function updateSmellyItem(item: TUpdatedItem): TUpdatedItem {
    const newSellIn = item.sellIn - 1;
    
    // - Smelly items degrade in Quality twice as fast as normal items
    const getQuality = () => {
        const q = newSellIn < 0 ? item.quality - 4 : item.quality - 2
        return controlQuality(q)
    }

    const newQuality = getQuality()

    return { ...item, sellIn: newSellIn, quality: newQuality }
}

// export function reduceCategories(
//     currentData: Item,
//     newData: TUpdatedItem
//   ) {
//     const { name, sellIn, quality } = currentData

//     switch(newData.name) {
//         case "Good Wine":
//             return {...currentData, category: "tasty"}
//         case "B-DAWG Keychain":
//             return {...currentData, category: "legendary"}
//         case "Backstage passes for Re:Factor":       
//             return {...currentData, category: "covetted"}
//         case "Backstage passes for HAXX":       
//             return {...currentData, category: "covetted"}
//         case "Duplicate Code":       
//             return {...currentData, category: "smelly"}
//         case "Long Methods":       
//             return {...currentData, category: "smelly"}
//         case "Ugly Variable Names":       
//             return {...currentData, category: "smelly"}
//         default: 
//             return {...currentData, category: "standard"}
//     }
//   }

//   export const itemsWithCategories: (item: Item) => TUpdatedItem = (item: Item) => reduceCategories(item, {
//       name: item.name,
//       sellIn: 0,
//       quality: 0,
//       category: "standard",
//       toString: () => `${this.category}, ${newData.name}, ${newData.sellIn}, ${newData.quality}`

//   })
