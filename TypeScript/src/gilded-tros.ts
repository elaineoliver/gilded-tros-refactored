import {Item} from './item';

export interface TUpdatedItem extends Item {
    name: string
    sellIn: number // Number of days we have to sell the item
    quality: number // How valuable the item is: > 0, <= 50
    category: string
    toString: () => string
}

export function reduceCategories(
    currentData: Item,
    newData: TUpdatedItem
  ) {
    const { name, sellIn, quality } = currentData

    switch(newData.name) {
        case "Good Wine":
            return { 
                name, sellIn, quality, category: "tasty"
            }
        case "B-DAWG Keychain":
            return { 
                name, sellIn, quality: 80, category: "legendary"
            }
        case "Backstage passes for Re:Factor":       
            return {
                name, sellIn, quality, category: "covetted"
            }
        case "Backstage passes for HAXX":       
            return {
                name, sellIn, quality, category: "covetted"
            }
        case "Duplicate Code":       
            return {
                name, sellIn, quality, category: "smelly"
            }
        case "Long Methods":       
            return {
                name, sellIn, quality, category: "smelly"
            }
        case "Ugly Variable Names":       
            return {
                name, sellIn, quality, category: "smelly"
            }
        default: 
            return {
                name, sellIn, quality, category: "standard"
            }
    }
  }

  export const itemsWithCategories: (item: Item) => TUpdatedItem = (item: Item) => reduceCategories(item, {
      name: item.name,
      sellIn: 0,
      quality: 0,
      category: "standard"
  })

export class GildedTros {

    constructor(public items: Array<Item>) {

    }


    public updateQuality(): void {
        this.items.reduce(itemsWithCategories)

        // for (let i = 0; i < this.items.length; i++) {
        //     if (this.items[i].name != 'Good Wine' && this.items[i].name != 'Backstage passes for Re:Factor'
        //         && this.items[i].name != 'Backstage passes for HAXX') {
        //         if (this.items[i].quality > 0) {
        //             if (this.items[i].name != 'B-DAWG Keychain') {
        //                 this.items[i].quality = this.items[i].quality - 1;
        //             }
        //         }
        //     } else {
        //         if (this.items[i].quality < 50) {
        //             this.items[i].quality = this.items[i].quality + 1;

        //             if (this.items[i].name == 'Backstage passes for Re:Factor') {
        //                 if (this.items[i].sellIn < 11) {
        //                     if (this.items[i].quality < 50) {
        //                         this.items[i].quality = this.items[i].quality + 1;
        //                     }
        //                 }

        //                 if (this.items[i].sellIn < 6) {
        //                     if (this.items[i].quality < 50) {
        //                         this.items[i].quality = this.items[i].quality + 1;
        //                     }
        //                 }
        //             }
        //         }
        //     }

        //     if (this.items[i].name != 'B-DAWG Keychain') {
        //         this.items[i].sellIn = this.items[i].sellIn - 1;
        //     }

        //     if (this.items[i].sellIn < 0) {
        //         if (this.items[i].name != 'Good Wine') {
        //             if (this.items[i].name != 'Backstage passes for Re:Factor' || this.items[i].name != 'Backstage passes for HAXX') {
        //                 if (this.items[i].quality > 0) {
        //                     if (this.items[i].name != 'B-DAWG Keychain') {
        //                         this.items[i].quality = this.items[i].quality - 1;
        //                     }
        //                 }
        //             } else {
        //                 this.items[i].quality = this.items[i].quality - this.items[i].quality;
        //             }
        //         } else {
        //             if (this.items[i].quality < 50) {
        //                 this.items[i].quality = this.items[i].quality + 1;
        //             }
        //         }
        //     }
        // }
    }

}

