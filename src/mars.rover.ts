import {Direction} from "./direction";

export class MarsRover {
    execute(commands: string): string {
        let count = 0;
        let facing = new Direction('N');

        for (let i = 0; i < commands.length; i++) {
            const currentCommand = commands[i];
            if (currentCommand === 'M') {
                count = this.move(count);
            } else if (currentCommand === 'R') {
                facing = facing.rotateRight();
            } else if (currentCommand === 'L') {
                facing = facing.rotateLeft();
            }
        }

        return '0:' + count + ':' + facing.direction;
    }

    private move(count: number) {
        count++;
        if (count > 9) {
            count = 0;
        }
        return count;
    }
}