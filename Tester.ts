import { Card } from "./Card";
import { Door } from "./Door";
import { SorterCard } from "./SorterCard";
import { AirStripCard } from "./AirstripCard";
import { TransAirSite } from "./WarsawTransAirSite";
import { ManagerCard } from "./ManagerCard";
import { Zone } from "./Zone";

export class Tester {
    centre:TransAirSite

    constructor() {
        this.createCentre()
        this.setStartingZones()
    }

    // Create part
    public createCentre = (): void => {
          
        
        var zone0 = new Zone("Outside",0,1000,[])
        var zone1 = new Zone("Unloading",1,5,[])
        var zone2 = new Zone("Airstrip",3,3,[])
        var zone3 = new Zone("Sorting",5,7,[])
        var zone4 = new Zone("Storage",1,3,[])

        let zonesArray = [zone0,zone1,zone2,zone3,zone4]


        var card1 = new AirStripCard("Joe",5,10,"Warsaw","Airstrip")
        var card2 = new AirStripCard("Dan",1,12,"Warsaw","Airstrip")
        var card3 = new AirStripCard("Matt",5,3,"Warsaw","Airstrip")
        var card4 = new AirStripCard("Tim",5,20,"Warsaw","Airstrip")
        var card5 = new SorterCard("Bob",3,30,"Warsaw","Sorter")
        var card6 = new SorterCard("Steve",3,30,"Warsaw","Sorter")
        var card7 = new ManagerCard("Pete", 10, 5, "Warsaw","Manager")
        var card8 = new ManagerCard("Amy", 10, 5, "Warsaw","Manager" )

        let cardsArray = [card1, card2, card3, card4, card5, card6,card7,card8]


        // Outside -> Unloading
        var door0 = new Door(0,zone0,zone1)

        // Unloading -> Outside
        var door1 = new Door(1,zone0,zone1)

        // Sorting -> Unloading
        var door2 = new Door(2,zone0,zone1)

        // Unloading -> Sorting
        var door3 = new Door(3,zone0,zone1)

        // Airstrip -> Sorting
        var door4 = new Door(4,zone0,zone1)

        // Sorting -> Airstrip
        var door5 = new Door(5,zone0,zone1)

        // Sorting -> Storage
        var door6 = new Door(6,zone0,zone1)

        // Storage -> Sorting
        var door7 = new Door(7,zone0,zone1)

        let doorsArray = [door0, door1, door2, door3, door4, door5, door6, door7]
    
        this.centre = new TransAirSite("Warsaw",zonesArray,cardsArray,doorsArray)
        console.log("Centre created")
    };

    public getCentre = (): TransAirSite => {
        return this.centre
    };

    // Set starting zone for cards
    public setStartingZones = (): void => {
        
        var zones = this.centre.getZonesArray()
        for (let index = 0; index < this.centre.getCardsArray.length; index++) {
            const element = this.centre.getCardsArray[index];

            element.setZone(zones[0])
        }
    };

}



var card1 = new AirStripCard("Joe",5,10,"Warsaw","Airstrip")
var card2 = new AirStripCard("Dan",1,12,"Warsaw","Airstrip")
var card3 = new AirStripCard("Matt",5,3,"Warsaw","Airstrip")
var card4 = new AirStripCard("Tim",5,20,"Warsaw","Airstrip")
var card5 = new SorterCard("Bob",3,30,"Warsaw","Sorter")
var card6 = new SorterCard("Steve",3,30,"Warsaw","Sorter")
var card7 = new ManagerCard("Pete", 10, 5, "Warsaw","Manager")
var card8 = new ManagerCard("Amy", 10, 5, "Warsaw","Manager")

 
let cardsArray = [card1, card2, card3, card4, card5, card6,card7,card8]

 
var zone0 = new Zone("Outside",0,1000,[])
var zone1 = new Zone("Unloading",1,5,[])
var zone2 = new Zone("Airstrip",3,3,[])
var zone3 = new Zone("Sorting",5,7,[])
var zone4 = new Zone("Storage",1,3,[])
 
let zonesArray = [zone0,zone1,zone2,zone3,zone4]

// set zones for cards

card1.setZone(zone0)
card2.setZone(zone0)
card3.setZone(zone0)
card4.setZone(zone0)
card5.setZone(zone0)
card6.setZone(zone0)
card7.setZone(zone0)
card8.setZone(zone0)

 
// Outside -> Unloading
var door0 = new Door(0,zone0,zone1)
 
// Unloading -> Outside
var door1 = new Door(1,zone1,zone0)
 
// Sorting -> Unloading
var door2 = new Door(2,zone1,zone2)
 
// Unloading -> Sorting
var door3 = new Door(3,zone2,zone1)
 
// Airstrip -> Sorting
var door4 = new Door(4,zone3,zone1)
 
// Sorting -> Airstrip
var door5 = new Door(5,zone1,zone4)
 
// Sorting -> Storage
var door6 = new Door(6,zone4,zone1)
 
// Storage -> Sorting
var door7 = new Door(7,zone2,zone3)
 
let doorsArray = [door0, door1, door2, door3, door4, door5, door6, door7]
    

 
// Testing
var WarsawCentre = new TransAirSite("Warsaw",zonesArray,cardsArray,doorsArray)
 
console.log(WarsawCentre.cardsInAllZones())

WarsawCentre.move(card4,0)
WarsawCentre.move(card5,0)
WarsawCentre.move(card6,0)
WarsawCentre.move(card7,0)
WarsawCentre.move(card8,0)

console.log("=========================")
console.log(WarsawCentre.cardsInAllZones())

console.log(card4.getZone().name)
console.log("door2 source "+door2.source.name)
console.log("door2 destination "+door2.destination.name)
console.log("card currentZone "+card4.currentZone.name)
// console.log(card3.getZone().name)
// console.log(card4.getZone().name)
// console.log(card8.getZone().name)
WarsawCentre.move(card4,2)
WarsawCentre.move(card5,2)
WarsawCentre.move(card6,5)
WarsawCentre.move(card7,5)
WarsawCentre.move(card8,1)

console.log("=========================")
console.log(WarsawCentre.cardsInAllZones())
console.log("card currentZone "+card4.currentZone.name)
WarsawCentre.move(card4,7)


console.log("=========================")
console.log(WarsawCentre.cardsInAllZones())
console.log("card currentZone "+card4.currentZone.name)