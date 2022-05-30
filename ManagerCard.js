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
exports.ManagerCard = void 0;
var Card_1 = require("./Card");
var ManagerCard = /** @class */ (function (_super) {
    __extends(ManagerCard, _super);
    /**
     * Constructor for a Employee's card
     * @param {string} memberName - Employee's name
     * @param {number} rating - Employee's rating
     * @param {number} credits - inital number of credits
     * @param {string} centre - centre at which a Employee is registered
     * @param {string} type - Employee type
     */
    function ManagerCard(memberName, rating, credits, centre, employeeNumber, dept, type) {
        var _this = _super.call(this, rating, credits, centre, memberName, type = "Manager") || this;
        _this.fitnesScore = 0;
        /**
         * @return {string} Employee's name
         */
        _this.getName = function () { return _this.memberName; };
        /**
         * @return {number} Employee's id
         */
        _this.getId = function () { return _this.cardId; };
        /**
         * changes a Employee's rating
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

         * @param {number} credits number of credits to be added
         */
        _this.addCredits = function (credits) {
            _this.credits += credits;
        };
        /**
         * decrements the credits to show that a zone has been use
         */
        _this.useZone = function () {
            _this.fitnesScore++;
        };
        /**
         * @return {number} number of credits on the card
         */
        _this.getCredits = function () { return _this.credits; };
        /**
         * @return {number} number of credits on the card
         */
        _this.getFitnesScore = function () { return _this.fitnesScore; };
        /**
         * @return {boolean} true if a card has enough credits to enter a zone,
         * else false
         */
        _this.hasEnoughCredits = function () { return true; };
        /**
         * @return {string} a String representation of the member card details
         */
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
        _this.cardId = ManagerCard.currentId++;
        return _this;
    }
    ManagerCard.currentId = 1;
    return ManagerCard;
}(Card_1.Card));
exports.ManagerCard = ManagerCard;
