import { Door } from "./Door";
import { TransAirAccess } from "./TransAirAccess";
import { Zone } from "./Zone";

/**
 * A card is used to move through a door.
 */
export class Card {
    protected cardId: number;
    protected memberName:string;
    protected type:string;
    protected rating:number;
    protected credits:number;
    protected centre:string;
    protected employeeNumber: number;
    protected dept: string;

    currentZone: Zone;

    constructor(rating: number, credits:number, centre:string, memberName:string, type:string) {
        this.rating = rating;
        this.credits = credits;
        this.centre = centre;
        this.memberName = memberName;
        this.type = type;
    }

    

    /**
     * @return {number} card id
     */
    // Get card id
    public getId = (): number => this.cardId;

    /**
     * @return {string} card type
     */
    public getType = (): string => this.type;

    /**
     * @return {Zone}
     */
    public getZone = (): Zone => this.currentZone;

    public setZone(value: Zone) {​​​​​​​​
        this.currentZone = value;
    }​​​​​​​​

    // Methods to override
    useZone = (): void => {
      
    };

    public hasEnoughCredits = (): boolean => {
        return true
    };

    // get rating of the card
    public getRating = (): number => this.rating;

    // get credits
    public getCredits = (): number => this.credits;
    
    // get name
    public getName = (): string => this.memberName;

    // change zone
    public changeZone = (zone:Zone): void => {this.currentZone = zone};
}