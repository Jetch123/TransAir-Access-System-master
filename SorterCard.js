"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.SorterCard = void 0;
var Card_1 = require("./Card");
var SorterCard = /** @class */ (function (_super) {
    __extends(SorterCard, _super);
    /**
     * Constructor for a Employee's card
     * @param {string} memberName - Employee's name
     * @param {number} rating - Employee's rating
     * @param {number} credits - inital number of credits
     * @param {string} centre - centre at which a Employee is registered
     * @param {string} type - Employee type
     */
    function SorterCard(memberName, rating, 
    // adding 30 creadits to an account for begining 
    credits, centre, type) {
        var _this = _super.call(this, rating, credits, centre, memberName, type = "Sorter") || this;
        _this.loyaltyPoints = 21;
        /**
         * @return {string} Employee's name
         */
        _this.getName = function () { return _this.memberName; };
        /**
         * @return {number} Employee's id
         */
        _this.getId = function () { return _this.cardId; };
        /**
         * changes an Employee's rating
         * @param {number} rating - new rating
         */
        _this.changeRating = function (rating) {
            _this.rating = rating;
        };
        /**
         * @return {number} Employee's rating
         */
        _this.getRating = function () { return _this.rating; };
        /**
         * adds credits to the Employee's card
         * @param {number} credits number of credits to be added
         */
        _this.addCredits = function (credits) {
            _this.credits += credits;
        };
        /**
         * decrements the credits to show that a zone has been use
         */
        _this.useZone = function () {
            _this.credits -= 3;

            _this.loyaltyPoints += 2;
            _this.convertCredits();
        };
        /**
         * @return {number} number of credits on the card
         */
        _this.getCredits = function () { return _this.credits; };
        /**
         * @return {number} number of credits on the card
         */
        _this.getLoyaltyPoints = function () { return _this.loyaltyPoints; };
        /**
         * @return {boolean} true if a card has enough credits to enter a zone,
         * else false
         */
        _this.hasEnoughCredits = function () { return _this.credits >= 3; };
        /**
         * @return {string} a String representation of the member card details
         */
        _this.convertCredits = function () {
            var loyalty = _this.loyaltyPoints;
            var credits = Math.round(loyalty / 5);
            var rest = loyalty % 5;
            _this.credits += credits;
            _this.loyaltyPoints = rest;
        };
        _this.toString = function () {
            return "***Employee Card***" +
                "\nCard No: " +
                _this.cardId +
                "\nName: " +
                _this.memberName +
                "\nRating: " +
                _this.rating +
                "\nCredits: " +
                _this.credits +
                "\nCentre : " +
                _this.centre +
                "\n";
        };
        _this.cardId = SorterCard.currentId++;
        return _this;
    }
    SorterCard.currentId = 201;
    return SorterCard;
}(Card_1.Card));
exports.SorterCard = SorterCard;
