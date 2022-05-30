"use strict";
exports.__esModule = true;
exports.Tester = void 0;
var Door_1 = require("./Door");
var SorterCard = require("./SorterCard");
var AirStripCard_1 = require("./AirStripCard");
var TransAirSite_1 = require("./TransAirSite");
var ManagerCard_1 = require("./ManagerCard");
var Zone_1 = require("./Zone");
var Tester = /** @class */ (function () {
    function Tester() {
        var _this = this;
        // Create part
        this.createCentre = function () {
            var zone0 = new Zone_1.Zone("Outside",0,1000,[]);
            var zone1 = new Zone_1.Zone("Unloading",1,5,[]);
            var zone2 = new Zone_1.Zone("Airstrip",3,3,[]);
            var zone3 = new Zone_1.Zone("Sorting",5,7,[]);
            var zone4 = new Zone_1.Zone("Storage",1,3,[]);
            var zonesArray = [zone0, zone1, zone2, zone3, zone4];
            var card1 = new AirStripCard_1.AirStripCard("Joe", 5, 10, "Warsaw", "Airstrip");
            var card2 = new AirStripCard_1.AirStripCard("Dan", 1, 12, "Warsaw", "Airstrip");
            var card3 = new AirStripCard_1.AirStripCard("Matt", 5, 3, "Warsaw", "Airstrip");
            var card4 = new AirStripCard_1.AirStripCard("Tim", 5, 20, "Warsaw", "Airstrip");
            var card5 = new SorterCard.SorterCard("Bob", 3, 30, "Warsaw", "Sorter");
            var card6 = new SorterCard.SorterCard("Steve", 3, 30, "Warsaw", "Sorter");
            var card7 = new ManagerCard_1.ManagerCard("Pete", 10, 5, "Warsaw","Manager");
            var card8 = new ManagerCard_1.ManagerCard("Amy", 10, 5, "Warsaw","Manager");
            var cardsArray = [card1, card2, card3, card4, card5, card6, card7, card8];
            // Outside -> Unloading
            var door0 = new Door_1.Door(0, zone0, zone1);
            // Unloading -> Outside
            var door1 = new Door_1.Door(1, zone0, zone1);
            // Sorting -> Unloading
            var door2 = new Door_1.Door(2, zone0, zone1);
            // Unloading -> Sorting
            var door3 = new Door_1.Door(3, zone0, zone1);
            // Airstrip -> Sorting
            var door4 = new Door_1.Door(4, zone0, zone1);
            // Sorting -> Airstrip
            var door5 = new Door_1.Door(5, zone0, zone1);
            // Sorting -> Storage
            var door6 = new Door_1.Door(6, zone0, zone1);
            // Storage -> Sorting
            var door7 = new Door_1.Door(7, zone0, zone1);
            var doorsArray = [door0, door1, door2, door3, door4, door5, door6, door7];
            _this.centre = new TransAirSite_1.TransAirSite("Warsaw", zonesArray, cardsArray, doorsArray);
            console.log("Centre created");
        };
        this.getCentre = function () {
            return _this.centre;
        };
        // Set starting zone for cards
        this.setStartingZones = function () {
            var zones = _this.centre.getZonesArray();
            for (var index = 0; index < _this.centre.getCardsArray.length; index++) {
                var element = _this.centre.getCardsArray[index];
                element.setZone(zones[0]);
            }
        };
        this.createCentre();
        this.setStartingZones();
    }
    return Tester;
}());
exports.Tester = Tester;
var card1 = new AirStripCard_1.AirStripCard("Joe", 5, 10, "Warsaw", "AirStrip");
var card2 = new AirStripCard_1.AirStripCard("Dan", 1, 12, "Warsaw", "AirStrip");
var card3 = new AirStripCard_1.AirStripCard("Matt", 5, 3, "Warsaw", "AirStrip");
var card4 = new AirStripCard_1.AirStripCard("Tim", 5, 20, "Warsaw", "AirStrip");
var card5 = new SorterCard.SorterCard("Bob", 3, 30, "Warsaw", "Sorter");
var card6 = new SorterCard.SorterCard("Steve", 3, 30, "Warsaw", "Sorter");
var card7 = new ManagerCard_1.ManagerCard("Pete", 10, 5, "Warsaw","Manager");
var card8 = new ManagerCard_1.ManagerCard("Amy", 10, 5, "Warsaw","Manager");
var cardsArray = [card1, card2, card3, card4, card5, card6, card7, card8];
var zone0 = new Zone_1.Zone("Outside", 0, 1000, cardsArray);
var zone1 = new Zone_1.Zone("Unloading", 1, 100, []);
var zone2 = new Zone_1.Zone("Airstrip", 3, 10, []);
var zone3 = new Zone_1.Zone("Sorting", 5, 2, []);
var zone4 = new Zone_1.Zone("Storage", 1, 1, []);
var zonesArray = [zone0, zone1, zone2, zone3, zone4];
// set zones for cards
card1.setZone(zone0);
card2.setZone(zone0);
card3.setZone(zone0);
card4.setZone(zone0);
card5.setZone(zone0);
card6.setZone(zone0);
card7.setZone(zone0);
card8.setZone(zone0);
// Outside -> Unloading
var door0 = new Door_1.Door(0, zone0, zone1);
// Unloading -> Outside
var door1 = new Door_1.Door(1, zone1, zone0);
// Sorting -> Unloading
var door2 = new Door_1.Door(2, zone1, zone2);
// Unloading -> Sorting
var door3 = new Door_1.Door(3, zone2, zone1);
// Airstrip -> Sorting
var door4 = new Door_1.Door(4, zone3, zone1);
// Sorting -> Airstrip
var door5 = new Door_1.Door(5, zone1, zone4);
// Sorting -> Storage
var door6 = new Door_1.Door(6, zone4, zone1);
// Storage -> Sorting
var door7 = new Door_1.Door(7, zone2, zone3);
var doorsArray = [door0, door1, door2, door3, door4, door5, door6, door7];
// Testing
var WarsawCentre = new TransAirSite_1.TransAirSite("Warsaw", zonesArray, cardsArray, doorsArray);
console.log(WarsawCentre.cardsInAllZones());
WarsawCentre.move(card4, 0);
WarsawCentre.move(card5, 0);
WarsawCentre.move(card6, 0);
WarsawCentre.move(card7, 0);
WarsawCentre.move(card8, 0);
console.log("=========================");
console.log(WarsawCentre.cardsInAllZones());
console.log(card4.getZone().name);
console.log("door2 source " + door2.source.name);
console.log("door2 destination " + door2.destination.name);
console.log("card currentZone " + card4.currentZone.name);
// console.log(card3.getZone().name)
// console.log(card4.getZone().name)
// console.log(card8.getZone().name)
WarsawCentre.move(card4, 2);
WarsawCentre.move(card5, 2);
WarsawCentre.move(card6, 5);
WarsawCentre.move(card7, 5);
WarsawCentre.move(card8, 1);
console.log("=========================");
console.log(WarsawCentre.cardsInAllZones());
console.log("card currentZone " + card4.currentZone.name);
WarsawCentre.move(card4, 7);
console.log("=========================");
console.log(WarsawCentre.cardsInAllZones());
console.log("card currentZone " + card4.currentZone.name);
