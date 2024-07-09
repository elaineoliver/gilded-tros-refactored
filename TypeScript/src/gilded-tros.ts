import { updateCovettedItem, updateLegendaryItem, updateSmellyItem, updateStandardItem, updateTastyItem } from './gilded-tros.utils';
import {Item} from './item';

export class GildedTros {
    constructor(public items: Array<Item>) {

    }

    private updateItem(item: Item) {
        let updatedItem: Item

        switch(item.name) {
            case "Good Wine":
                updatedItem = updateTastyItem(item)
                break;
            case "B-DAWG Keychain":
                updatedItem = updateLegendaryItem(item)
                break;
            case "Backstage passes for Re:Factor":       
                updatedItem = updateCovettedItem(item)
                break;
            case "Backstage passes for HAXX":       
                updatedItem = updateCovettedItem(item)
                break;
            case "Duplicate Code":       
                updatedItem = updateSmellyItem(item)
                break;
            case "Long Methods":       
                updatedItem = updateSmellyItem(item)
                break;
            case "Ugly Variable Names":       
                updatedItem = updateSmellyItem(item)
                break;
            default: 
                updatedItem = updateStandardItem(item)
                break;
        }

        return updatedItem
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

