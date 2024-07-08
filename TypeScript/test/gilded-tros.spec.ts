import {Item} from '../src/item';
import {GildedTros} from '../src/gilded-tros';


describe('GildedTrosTest', () => {
    const items: Item[] = [
        new Item('Ring of Cleansening Code', 10, 20),
        new Item('Good Wine', 2, 0),
        new Item('Elixir of the SOLID', 5, 7),
        new Item('B-DAWG Keychain', 0, 80),
        new Item('B-DAWG Keychain', -1, 80),
        new Item('Backstage passes for Re:Factor', 15, 20),
        new Item('Backstage passes for Re:Factor', 10, 49),
        new Item('Backstage passes for HAXX', 5, 49),
        // these smelly items do not work properly yet
        new Item('Duplicate Code', 3, 6),
        new Item('Long Methods', 3, 6),
        new Item('Ugly Variable Names', 3, 6)
    ];

    const app: GildedTros = new GildedTros(items);
    app.updateQuality();
    
    test.each(app.items)(`Item $name`, (item) => {
        if (item.name === 'Ring of Cleansening Code') {
            expect(item.sellIn).toEqual(9);
            expect(item.quality).toEqual(19);
        } else if (item.name === 'Good Wine') {
            expect(item.sellIn).toEqual(1);
            expect(item.quality).toEqual(1);
        } else if (item.name === 'Elixir of the SOLID') {
            expect(item.sellIn).toEqual(4);
            expect(item.quality).toEqual(6);
        } else if (item.name === 'B-DAWG Keychain') {
            expect(item.sellIn).toEqual(0);
            expect(item.quality).toEqual(79);
        } else if (item.name === 'Backstage passes for Re:Factor') {
            expect(item.sellIn).toEqual(14);
            expect(item.quality).toEqual(21);
        }
    })
});
