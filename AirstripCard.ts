import { Card } from "./Card";
import { Zone } from "./Zone";

export class AirStripCard extends Card{
  private static currentId = 1000;
  // private cardId: number;

  /**
   * Constructor for a Employee's card
   * @param {string} memberName - Employee's name
   * @param {number} rating - Employees's security rating
   * @param {number} credits 
   * @param {string} centre - centre at which an Employee is registered
   * @param {string} type - Employee type
   */
  constructor(
    memberName: string,
    rating: number,
    credits: number,
    centre: string,
    type: string,
  ){
    super(rating,credits,centre, memberName, type="AirStrip")
    this.cardId = AirStripCard.currentId++;
  }

  /**
   * @return {string} Employee's name
   */
  public getName = (): string => this.memberName;

  /**
   * @return {number} Employee's id
   */
  public getId = (): number => this.cardId;

  /**
   * changes a Employee's rating
   * @param {number} rating - new rating
   */
  public changeRating = (rating: number): void => {
    this.rating = rating;
  };

  /**
   * @return {number} Employee's rating
   */
  public getRating = (): number => this.rating;

  /**
   * adds credits to the Employee's card
   * @param {number} credits number of credits to be added
   */
  public addCredits = (credits: number): void => {
    this.credits += credits;
  };

  /**
   * decrements the credits to show that a zone has been use
   */
  public useZone = (): void => {
    this.credits -= 4;
  };

  /**
   * @return {number} number of credits on the card
   */
  public getCredits = (): number => this.credits;

  /**
   * @return {boolean} true if a card has enough credits to enter a zone,
   * else false
   */
  public hasEnoughCredits = (): boolean => this.credits >= 4;

  /**
   * @return {string} a String representation of the member card details
   */
  public toString = (): string =>
    "***Employee Card***" +
    "\nCard No: " +
    this.cardId +
    "\nName: " +
    this.memberName +
    "\nRating: " +
    this.rating +
    "\nCredits: " +
    this.credits +
    "\nCentre : " +
    this.centre +
    "\n";
}
