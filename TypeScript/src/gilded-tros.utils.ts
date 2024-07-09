import {Item} from './item';

export function controlQuality(quality: number) {
    // The Quality of an item is never negative
    if (quality < 0) {
        return 0
    // The Quality of an item is never more than 50, except for legendary items which shouldn't use this function
    } else if (quality > 50) {
        return 50
    } else {
        return quality
    }
}

export function getTwiceAsFast(speed: number) {
    // Twice as fast = speed + (speed * 2).
    // So if speed is one, then twice as fast is 1 + (1 * 2) = 3
    // And if speed is three, then twice as fast is 3 + (3 * 2) = 9!
    const absoluteSpeed = Math.abs(speed)
    return absoluteSpeed + (absoluteSpeed * 2)
}

export function updateStandardItem(item: Item): Item {
    const newSellIn = item.sellIn - 1;

    const getQuality = () => {
        // Once the sell by date has passed, Quality degrades twice as fast
        const speed2x = getTwiceAsFast(1)
        const q = newSellIn < 0 ? item.quality - speed2x : item.quality - 1
        return controlQuality(q)
    }

    const newQuality = getQuality()

    return { ...item, sellIn: newSellIn, quality: newQuality }
}

export function updateTastyItem(item: Item): Item {
    const newSellIn = item.sellIn - 1;

    const getQuality = () => {
        // "Good Wine" actually increases in Quality the older it gets
        const q = item.quality > 0 ? item.quality * 2 : 1;
        return controlQuality(q)
    }
    
    const newQuality = getQuality()

    return { ...item, sellIn: newSellIn, quality: newQuality }
}

export function updateLegendaryItem(item: Item): Item {
    // "B-DAWG Keychain", being a legendary item, never has to be sold or decreases in Quality
    return { ...item, quality: 80 }
}

export function updateCovettedItem(item: Item): Item {
	// "Backstage passes" for very interesting conferences increases in Quality as its SellIn value approaches
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

export function updateSmellyItem(item: Item): Item {
    const newSellIn = item.sellIn - 1;
    
    const getQuality = () => {
        // Smelly items degrade in Quality twice as fast as normal items
        // Once the sell by date has passed, Quality degrades twice as fast
        const speed2x = getTwiceAsFast(1)
        const speed4x = getTwiceAsFast(speed2x)
        const q = newSellIn < 0 ? item.quality - speed4x : item.quality - speed2x
        return controlQuality(q)
    }

    const newQuality = getQuality()

    return { ...item, sellIn: newSellIn, quality: newQuality }
}
