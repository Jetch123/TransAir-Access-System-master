/**
 * A zone represents an area at a centre.Each zone has a name and a
 * capacity which represents the maximum number of people who can enter
 * the zone at any one time. 
 */

import { Card } from "./Card";
import { Door } from "./Door";
import { TransAirAccess } from "./TransAirAccess";

export class Zone {
    name:string;
    rating:number;
    capacity:number;
    //all cards in particular zone
    cards:Array<Card>

    constructor(name:string, rating:number, capacity:number, cards:Array<Card>) {
        this.name = name;
        this.rating = rating;
        this.capacity = capacity;
        this.cards = cards;
    }
    
    public getCards = (): Array<Card> => this.cards;

    public isFull = (): boolean => {
        
        if(this.capacity < this.cards.length ){
            return false
        }else{
            return true
        }
    };
    
    public addCardToZone = (card: Card): void => {
        this.cards.push(card)
    };
    
    // removeCardFromZone
    public removeCardFromZone = (card: Card): void => {
        for (let index = 0; index < this.cards.length; index++) {
            let element = this.cards[index];
         
            if(element.getId() == card.getId()){
                this.cards.splice(index,1)
            }
        }
    };
}
