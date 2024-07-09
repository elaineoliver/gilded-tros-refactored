import { controlQuality, getTwiceAsFast, updateCovettedItem, updateLegendaryItem, updateSmellyItem, updateStandardItem, updateTastyItem } from '../src/gilded-tros.utils';
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
        const controlled = controlQuality(36)
        expect(controlled).toEqual(36)
    })
})

describe("getTwiceAsFast", () => {
    test("Doesn't fail if speed is 0 or negative", () => {
        const twiceAsFast0 = getTwiceAsFast(0)
        expect(twiceAsFast0).toEqual(0)

        const twiceAsFastMin1 = getTwiceAsFast(-2)
        expect(twiceAsFastMin1).toEqual(6)
    })

    test("Returns 3 if speed is 1", () => {
        const twiceAsFastMin = getTwiceAsFast(1)
        expect(twiceAsFastMin).toEqual(3)
    })

    test("Returns 9 if speed is 3", () => {
        const twiceAsFastMin = getTwiceAsFast(1)
        expect(twiceAsFastMin).toEqual(3)
    })
})

describe("updateStandardItem", () => {
    const baseItem: Item = {
        name: "TestMe",
        sellIn: 5,
        quality: 5
    }

    
    test("Sell in days decreases by one", () => {
        const updated = updateStandardItem(baseItem)
        expect(updated.sellIn).toBe(4)
    })

    test("Quality decreases by one before sell by date", () => {
        const updated = updateStandardItem(baseItem)
        expect(updated.quality).toBe(4)
    })

    test("Quality decreases twice as fast after sell by date", () => {
        const updated = updateStandardItem({
            ...baseItem,
            sellIn: -1
        })
        expect(updated.quality).toBe(2)
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
    const baseItem = {
        name: "TestMe",
        sellIn: 50,
        quality: 42
    }
    
    
    test("Sell in days decreases by one", () => {
        const updated = updateSmellyItem(baseItem)
        expect(updated.sellIn).toBe(49)
    })

    test("Quality decreases twice as fast as normal items before sell by date", () => {
        const updated = updateSmellyItem(baseItem)
        expect(updated.quality).toBe(39)
    })

    test("Quality decreases twice as fast after sell by date", () => {
        const updated = updateSmellyItem({
            ...baseItem,
            sellIn: -1
        })
        expect(updated.quality).toBe(33)
    })
})

