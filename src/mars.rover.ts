import {Direction} from "./direction";
import {Coordinates} from "./coordinates";

export class MarsRover {
    execute(commands: string): string {
        let coordinates = new Coordinates(0, 0);
        let facing = new Direction('N');

        for (let i = 0; i < commands.length; i++) {
            const currentCommand = commands[i];
            if (currentCommand === 'M') {
                coordinates = this.move(facing, coordinates);
            } else if (currentCommand === 'R') {
                facing = facing.rotateRight();
            } else if (currentCommand === 'L') {
                facing = facing.rotateLeft();
            }
        }

        return coordinates.x + ':' + coordinates.y + ':' + facing.direction;
    }

    move(facing: Direction, coordinates: Coordinates): Coordinates {
        if (facing.direction === 'N') {
            return coordinates.moveNorth();
        } else {
            return coordinates.moveEast();
        }
    }
}