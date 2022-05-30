import { Card } from "./Card";
import { SorterCard } from "./SorterCard";
import { AirStripCard } from "./AirstripCard";
import { TransAirAccess } from "./TransAirAccess";
import { Zone } from "./Zone";

/**
 * A door provides a one-way connection between two zones. It
 * has a door number and information about both the source and
 * the destination zone
 *
 */
export class Door {
    doorId:number;
    source:Zone;
    destination:Zone;

    constructor(doorId:number,source:Zone, destination:Zone) {
        this.doorId = doorId;
        this.source = source;
        this.destination = destination;
    }

    public getSource = (): Zone => this.source;
    public getDestination = (): Zone => this.destination;
    
}

