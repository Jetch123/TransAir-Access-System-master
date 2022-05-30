import { Card } from "./Card";
import { Zone } from "./Zone";

export class ManagerCard extends Card{
  private static currentId = 5000;
  private static employeeNumber:number;
  private static dept:string;
  private fitnesScore = 0;

  /**
   * Constructor for a Employee's card
   * @param {string} employeeName - Employee's name
   * @param {number} rating - Employee's rating
   * @param {number} credits 
   * @param {string} centre - centre at which a Employee is registered
   * @param {string} type - type of the card
   */
  constructor(
    employeeName: string,
    rating: number,
    credits: number,
    centre: string,
    type: string,
  ){
    super(rating,credits,centre, employeeName, type="Manager")
    this.cardId = ManagerCard.currentId++;
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
    this.fitnesScore++;
  };

  /**
   * @return {number} number of credits on the card
   */
  public getCredits = (): number => this.credits;
  /**
   * @return {number} number of credits on the card
   */
  public getFitnesScore = (): number => this.fitnesScore;

  /**
   * @return {boolean} true if a card has enough credits to enter a zone,
   * else false
   */
  public hasEnoughCredits = (): boolean => true;

  /**
   * @return {string} a String representation of the manager card details
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
