import { Card } from "./Card";
import { Door } from "./Door";
import { SorterCard } from "./SorterCard";
import { AirStripCard } from "./AirstripCard";
import { TransAirAccess } from "./TransAirAccess";
import { ManagerCard } from "./ManagerCard";
import { Zone } from "./Zone";

export class TransAirSite implements TransAirAccess {

    private AirportcentreName:string;
    private zones:Array<Zone>;
    private cards:Array<Card>;
    private doors:Array<Door>;


    constructor(centreName: string, zones:Array<Zone>, cards:Array<Card>, doors:Array<Door>) {
        this.AirportcentreName = centreName;
        this.zones = zones;
        this.cards = cards;
        this.doors = doors;
    }
    
    // getCentreName
    public getCentreName = (): string => this.AirportcentreName;

    // addZone
    public addZone = (zoneToAdd: Zone): void => {
        this.zones.push(zoneToAdd);
    };

    // addCard
    public addCard = (cardToAdd: Card): void => {
        this.cards.push(cardToAdd);
    };

    // addDoor
    public addDoor = (doorToAdd: Door): void => {
        this.doors.push(doorToAdd);
    };

    // findZone is returning Zone object based on given string
    public findZone = (zoneName: string): Zone => {
        for (let index = 0; index < this.zones.length; index++) {
            const element = this.zones[index];

            if(element.name == zoneName){
                return element;
            }
        }
        return undefined
    };

    // findCard is returning Card object based on given string
    public findCard = (cardId: number): Zone => {
        for (let index = 0; index < this.zones.length; index++) {
            const singleZone = this.zones[index];

            let cards = singleZone.cards
            // console.log("im at first for")

            for (let index2 = 0; index2 < cards.length; index2++) {
                // console.log("im at sec for")
                const singleCard = cards[index2];
    
                if(singleCard.getId() == cardId){
                    // console.log("im at if")
                    return singleZone
                }
            }
        }
        return undefined
    };

    // move is returning string which tells if you moved and where

    // * Returns a string description of the result of a card requesting to move through a door.
    // * If the move can be made, the card information is removed from the source
    // * zone and added to the destination zone and a suitable message returned.
    // * If the move cannot be made, the state of the system remains unchanged
    // * and a message specifying the reason is returned.
    
    public move = (cardToMove: Card, doorNumber: number): string => {
        var door = this.getDoors(doorNumber)
        var cardDestination = door.getDestination()
        // console.log("this.findCard(cardToMove.getId())")
        // console.log(this.findCard(cardToMove.getId()))
        var cardOrigin = this.findCard(cardToMove.getId())
        // console.log("Can i move throught doors: "+this.canMove(cardToMove,door))

        if(this.canMove(cardToMove,door)){
            cardOrigin.removeCardFromZone(cardToMove)
            cardToMove.useZone()
            cardToMove.changeZone(cardDestination)
            cardDestination.addCardToZone(cardToMove)

            return 'success'
        }else{
            return 'fail'
        }
    };

    // * A move will be successful if:
    // * the rating of the card  >= the rating of the destination zone
    // * AND the destination zone is not full
    // * AND the card has sufficient credits
    // * AND the card is currently in the source zone
    public canMove = (card: Card, door: Door): boolean => {
        
        var doorDestination = door.getDestination()
        var ratingDestination = doorDestination.rating
        var ratingCard = card.getRating()
        var cardZone = card.getZone()
        // console.log("cardZone"+cardZone)
        // console.log("cardZone"+cardZone.name)
        // console.log("door.getSource()"+door.getSource().name)
        
        // console.log("im in canMove")
        if(doorDestination.isFull()){
            // console.log("Im in first if")
            if(ratingCard >= ratingDestination){
                // console.log("Im in sec if")
                if(card.hasEnoughCredits()){
                    // console.log("Im in third if")
                    if(cardZone == door.getSource()){
                        // console.log("Im in last if")
                        return true
                    }
                }
            }
        }
        return false
    };

    public getDoors = (doorNumber: number): Door => {
        for (let index = 0; index < this.doors.length; index++) {
            const element = this.doors[index];

            if(element.doorId == doorNumber){
                return element;
            }
        }
        return undefined
    };

    // cardsInZone: (zone: Zone) => string;
    public cardsInZone = (zone: Zone): string => {
        let allCards = ''
        for (let index = 0; index < this.zones.length; index++) {
            const singleZone = this.zones[index];
            let cards = singleZone.cards

            if(singleZone == zone){
                for (let index2 = 0; index2 < cards.length; index2++) {
                    let card = cards[index2];
        
                    allCards += "Card id:" + card.getId() + " memberName:"+card.getName() + " type:"+ card.getType() + " rating:"+ card.getRating()
                    allCards += " credits:"+ card.getCredits() + "\n"
                }
            }
        }
        return allCards
    };

    // cardsInAllZones: () => string;
    public cardsInAllZones = (): string => {
        let allCards = ''
        for (let index = 0; index < this.zones.length; index++) {
            const singleZone = this.zones[index];
            let cards = singleZone.cards
            
            allCards += "Zone name: " + singleZone.name + "\n\n"
            for (let index2 = 0; index2 < cards.length; index2++) {
                let card = cards[index2];
    
                allCards += "Id:" + card.getId() + " name:"+card.getName() + " type:"+ card.getType() + " rating:"+ card.getRating()
                allCards += " credits:"+ card.getCredits() + "\n"
            }

        }
        return allCards
    };

    // moveToOutside: (card: Card) => void;
    public moveToOutside = (card: Card): void => {
        var out = this.findZone("Outside")
        card.setZone(out)
    };

    // moveAllToOutside: () => void;
    public moveAllToOutside = (): void => {
        for (let index = 0; index < this.cards.length; index++) {
            const element = this.cards[index];

            this.moveToOutside(element)
        }
    };
    

    // For testing


    // get cards
    public getCardsArray = (): Array<Card> => {
        return this.cards
    };

    // get doors
    public getDoorsArray = (): Array<Door> => {
        return this.doors
    };

    // get zones
    public getZonesArray = (): Array<Zone> => {
        return this.zones
    };

    // get card by index
    public getCardByIndex = (indexInArray:number): Card => {
        for (let index = 0; index < this.cards.length; index++) {
            const element = this.cards[index];

            if(index == indexInArray)
            {
                return element
            }
        }
    };

    // get zone by index
    public getZoneByIndex = (indexInArray:number): Zone => {
        for (let index = 0; index < this.zones.length; index++) {
            const element = this.zones[index];

            if(index == indexInArray)
            {
                return element
            }
        }
    };

}
