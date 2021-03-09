import {Direction} from "./Direction";

export class MarsRover {
    execute(commands: string): string {
        let count = 0;
        const facing = new Direction('N');

        for (let i = 0; i < commands.length; i++) {
            if (commands[i] === 'M') {
                count = this.move(count);
            }
            if (commands[i] === 'R') {
                facing.direction = this.rotateRight(facing);
            }
        }

        return '0:' + count + ':' + facing.direction;
    }

    private rotateRight(facing: Direction) {
        if (facing.direction === 'N') {
            return 'E';
        } else if (facing.direction === 'E') {
            return 'S';
        } else if (facing.direction === 'S') {
            return 'W';
        } else {
            return 'N';
        }
    }

    private move(count: number) {
        count++;
        if (count > 9) {
            count = 0;
        }
        return count;
    }
}