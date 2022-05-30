"use strict";
/**
 * A zone represents an area at a centre.Each zone has a name and a
 * capacity which represents the maximum number of employees who can enter
 * the zone at any one time. 
 */
exports.__esModule = true;
exports.Zone = void 0;
var Zone = /** @class */ (function () {
    function Zone(name, rating, capacity, cards) {
        var _this = this;
        this.getCards = function () { return _this.cards; };
        this.isFull = function () {
            if (_this.capacity < _this.cards.length) {
                return false;
            }
            else {
                return true;
            }
        };
        this.addCardToZone = function (card) {
            _this.cards.push(card);
        };
        // removeCardFromZone
        this.removeCardFromZone = function (card) {
            for (var index = 0; index < _this.cards.length; index++) {
                var element = _this.cards[index];
                if (element.getId() == card.getId()) {
                    _this.cards.splice(index, 1);
                }
            }
        };
        this.name = name;
        this.rating = rating;
        this.capacity = capacity;
        this.cards = cards;
    }
    return Zone;
}());
exports.Zone = Zone;
