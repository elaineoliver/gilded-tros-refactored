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

    public oldUpdateQuality(): void {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].name != 'Good Wine' && this.items[i].name != 'Backstage passes for Re:Factor'
                && this.items[i].name != 'Backstage passes for HAXX') {
                if (this.items[i].quality > 0) {
                    if (this.items[i].name != 'B-DAWG Keychain') {
                        this.items[i].quality = this.items[i].quality - 1;
                    }
                }
            } else {
                if (this.items[i].quality < 50) {
                    this.items[i].quality = this.items[i].quality + 1;

                    if (this.items[i].name == 'Backstage passes for Re:Factor') {
                        if (this.items[i].sellIn < 11) {
                            if (this.items[i].quality < 50) {
                                this.items[i].quality = this.items[i].quality + 1;
                            }
                        }

                        if (this.items[i].sellIn < 6) {
                            if (this.items[i].quality < 50) {
                                this.items[i].quality = this.items[i].quality + 1;
                            }
                        }
                    }
                }
            }

            if (this.items[i].name != 'B-DAWG Keychain') {
                this.items[i].sellIn = this.items[i].sellIn - 1;
            }

            if (this.items[i].sellIn < 0) {
                if (this.items[i].name != 'Good Wine') {
                    if (this.items[i].name != 'Backstage passes for Re:Factor' || this.items[i].name != 'Backstage passes for HAXX') {
                        if (this.items[i].quality > 0) {
                            if (this.items[i].name != 'B-DAWG Keychain') {
                                this.items[i].quality = this.items[i].quality - 1;
                            }
                        }
                    } else {
                        this.items[i].quality = this.items[i].quality - this.items[i].quality;
                    }
                } else {
                    if (this.items[i].quality < 50) {
                        this.items[i].quality = this.items[i].quality + 1;
                    }
                }
            }
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

