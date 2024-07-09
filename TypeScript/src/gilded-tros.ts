import { updateCovettedItem, updateLegendaryItem, updateSmellyItem, updateStandardItem, updateTastyItem } from './gilded-tros.utils';
import {Item} from './item';

export class GildedTros {
    constructor(public items: Array<Item>) {

    }

    private updateItem(item: Item) {
        switch(item.name) {
            case "Good Wine":
                return updateTastyItem(item)

            case "B-DAWG Keychain":
                return updateLegendaryItem(item)

            case "Backstage passes for Re:Factor":       
                return updateCovettedItem(item)

            case "Backstage passes for HAXX":       
                return updateCovettedItem(item)

            case "Duplicate Code":       
                return updateSmellyItem(item)

            case "Long Methods":       
                return updateSmellyItem(item)

            case "Ugly Variable Names":       
                return updateSmellyItem(item)

            default: 
                return updateStandardItem(item)

        }
    }

    public updateQuality(): void {
        for (let i = 0; i < this.items.length; i++) {
            const item = this.items[i]

            const newItem = this.updateItem(item)

            this.items[i].sellIn = newItem.sellIn
            this.items[i].quality = newItem.quality
        }
    }

}

