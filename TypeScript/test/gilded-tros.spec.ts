import {Item} from '../src/item';
import {GildedTros} from '../src/gilded-tros';

const day0Items: Item[] = [
    new Item('Ring of Cleansening Code', 10, 20),
    new Item('Good Wine', 2, 0),
    new Item('Elixir of the SOLID', 5, 7),
    new Item('B-DAWG Keychain', 0, 80),
    new Item('B-DAWG Keychain', -1, 80),
    new Item('Backstage passes for Re:Factor', 15, 20),
    new Item('Backstage passes for Re:Factor', 10, 49),
    new Item('Backstage passes for HAXX', 5, 49),
    new Item('Duplicate Code', 3, 6),
    new Item('Long Methods', 3, 6),
    new Item('Ugly Variable Names', 3, 6)
];

const day1Items: Item[] = [
    new Item('Ring of Cleansening Code', 9, 19),
    new Item('Good Wine', 1, 1),
    new Item('Elixir of the SOLID', 4, 6),
    new Item('B-DAWG Keychain', 0, 80),
    new Item('B-DAWG Keychain', -1, 80),
    new Item('Backstage passes for Re:Factor', 14, 21),
    new Item('Backstage passes for Re:Factor', 9, 50),
    new Item('Backstage passes for HAXX', 4, 50),
    new Item('Duplicate Code', 2, 3),
    new Item('Long Methods', 2, 3),
    new Item('Ugly Variable Names', 2, 3)
]

const day2Items: Item[] = [
    new Item('Ring of Cleansening Code', 8, 18),
    new Item('Good Wine', 0, 2),
    new Item('Elixir of the SOLID', 3, 5),
    new Item('B-DAWG Keychain', 0, 80),
    new Item('B-DAWG Keychain', -1, 80),
    new Item('Backstage passes for Re:Factor', 13, 22),
    new Item('Backstage passes for Re:Factor', 8, 50),
    new Item('Backstage passes for HAXX', 3, 50),
    new Item('Duplicate Code', 1, 0),
    new Item('Long Methods', 1, 0),
    new Item('Ugly Variable Names', 1, 0)
]

const day3Items: Item[] = [
    new Item('Ring of Cleansening Code', 7, 17),
    new Item('Good Wine', -1, 4),
    new Item('Elixir of the SOLID', 2, 4),
    new Item('B-DAWG Keychain', 0, 80),
    new Item('B-DAWG Keychain', -1, 80),
    new Item('Backstage passes for Re:Factor', 12, 23),
    new Item('Backstage passes for Re:Factor', 7, 50),
    new Item('Backstage passes for HAXX', 2, 50),
    new Item('Duplicate Code', 0, 0),
    new Item('Long Methods', 0, 0),
    new Item('Ugly Variable Names', 0, 0)
]

const day4Items: Item[] = [
    new Item('Ring of Cleansening Code', 6, 16),
    new Item('Good Wine', -2, 8),
    new Item('Elixir of the SOLID', 1, 3),
    new Item('B-DAWG Keychain', 0, 80),
    new Item('B-DAWG Keychain', -1, 80),
    new Item('Backstage passes for Re:Factor', 11, 24),
    new Item('Backstage passes for Re:Factor', 6, 50),
    new Item('Backstage passes for HAXX', 1, 50),
    new Item('Duplicate Code', -1, 0),
    new Item('Long Methods', -1, 0),
    new Item('Ugly Variable Names', -1, 0)
]

const day5Items: Item[] = [
    new Item('Ring of Cleansening Code', 5, 15),
    new Item('Good Wine', -3, 16),
    new Item('Elixir of the SOLID', 0, 2),
    new Item('B-DAWG Keychain', 0, 80),
    new Item('B-DAWG Keychain', -1, 80),
    new Item('Backstage passes for Re:Factor', 10, 26),
    new Item('Backstage passes for Re:Factor', 5, 50),
    new Item('Backstage passes for HAXX', 0, 50),
    new Item('Duplicate Code', -2, 0),
    new Item('Long Methods', -2, 0),
    new Item('Ugly Variable Names', -2, 0)
]

const day6Items: Item[] = [
    new Item('Ring of Cleansening Code', 4, 14),
    new Item('Good Wine', -4, 32),
    new Item('Elixir of the SOLID', -1, 0),
    new Item('B-DAWG Keychain', 0, 80),
    new Item('B-DAWG Keychain', -1, 80),
    new Item('Backstage passes for Re:Factor', 9, 28),
    new Item('Backstage passes for Re:Factor', 4, 50),
    new Item('Backstage passes for HAXX', -1, 0),
    new Item('Duplicate Code', -3, 0),
    new Item('Long Methods', -3, 0),
    new Item('Ugly Variable Names', -3, 0)
]

const allDays: Item[][] = [
    day0Items,
    day1Items,
    day2Items,
    day3Items,
    day4Items,
    day5Items,
    day6Items
]

describe("GildedTrosTest - updateQuality", () => {
    const app: GildedTros = new GildedTros(day0Items);

    const updatableDays = allDays.length - 1;

    for (let i = 0; i < updatableDays; i++) {
        app.updateQuality();

        const actual = app.items.map(item => item.toString())
        const expected = allDays[i + 1].map(item => item.toString())

        actual.forEach((o, j) => {
            test(`Day ${i + 1} ${o}`, () => {
                expect(o).toEqual(expected[j])
            })
        })
    }
})
