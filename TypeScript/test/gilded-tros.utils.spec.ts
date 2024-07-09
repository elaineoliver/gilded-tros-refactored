import { controlQuality, updateCovettedItem, updateLegendaryItem, updateSmellyItem, updateStandardItem, updateTastyItem } from '../src/gilded-tros.utils';
import { Item } from '../src/item';

describe("controlQuality", () => {
    test("Negative quality becomes 0", () => {
        const controlled = controlQuality(-5)
        expect(controlled).toEqual(0)
    })

    test("Quality over 50 becomes 50", () => {
        const controlled = controlQuality(58)
        expect(controlled).toEqual(50)
    })

    test("Quality greater than 0 and less than or equal to 50 remains the same", () => {
        const controlled = controlQuality(58)
        expect(controlled).toEqual(50)
    })
})

describe("updateStandardItem", () => {
    const item: Item = {
        name: "TestMe",
        sellIn: 5,
        quality: 5
    }

    const updated = updateStandardItem(item)

    test("Sell in days decreases by one", () => {
        expect(updated.sellIn).toBe(4)
    })

    test("Quality decreases by one", () => {
        expect(updated.quality).toBe(4)
    })
})

describe("updateTastyItem", () => {    
    const baseItem = {
        name: "TestMe",
        sellIn: 5,
        quality: 5
    }

    test("Sell in days decreases by one", () => {
        const updated = updateTastyItem(baseItem)
        expect(updated.sellIn).toBe(4)
    })

    test("Quality less than 0 becomes 1", () => {
        const updated = updateTastyItem({
            ...baseItem,
            quality: -5
        })
        expect(updated.quality).toBe(1)
    })

    test("Quality equal to 0 becomes 1", () => {
        const updated = updateTastyItem({
            ...baseItem,
            quality: 0
        })
        expect(updated.quality).toBe(1)
    })

    test("Quality greater than 0 increases by quality * 2", () => {
        const updated = updateTastyItem(baseItem)
        expect(updated.quality).toBe(10)
    })
})

describe("updateLegendaryItem", () => {    
    const baseItem = {
        name: "TestMe",
        sellIn: 50,
        quality: 42
    }

    test("Sell in days stay the same", () => {
        const updated = updateLegendaryItem(baseItem)
        expect(updated.sellIn).toBe(50)
    })

    test("Quality is always 80", () => {
        const updated = updateLegendaryItem(baseItem)
        expect(updated.quality).toBe(80)
    })
})

describe("updateCovettedItem", () => {    
    const baseItem = {
        name: "TestMe",
        sellIn: 50,
        quality: 42
    }

    test("Sell in days decreases by one", () => {
        const updated = updateCovettedItem(baseItem)
        expect(updated.sellIn).toBe(49)
    })

    test("Quality drops to 0 when sell in days is negative", () => {
        const updated = updateCovettedItem({
            ...baseItem,
            sellIn: 0
        })
        expect(updated.quality).toBe(0)
    })

    test("Quality increases by 3 when sell in days are less than 5", () => {
        const updated = updateCovettedItem({
            ...baseItem,
            sellIn: 4
        })
        expect(updated.quality).toBe(45)
    })

    test("Quality increases by 2 when sell in days are less than 10", () => {
        const updated = updateCovettedItem({
            ...baseItem,
            sellIn: 8
        })
        expect(updated.quality).toBe(44)
    })

    test("Quality increases by 1 when sell in days are greater than 10", () => {
        const updated = updateCovettedItem(baseItem)
        expect(updated.quality).toBe(43)
    })
})

describe("updateSmellyItem", () => {    
    const updated = updateSmellyItem({
        name: "TestMe",
        sellIn: 50,
        quality: 42
    })

    test("Sell in days decreases by one", () => {
        expect(updated.sellIn).toBe(49)
    })

    test("Quality decreases by 2", () => {
        expect(updated.quality).toBe(40)
    })
})
