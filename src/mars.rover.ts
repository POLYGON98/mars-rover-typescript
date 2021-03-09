import {Direction} from "./Direction";

export class MarsRover {
    execute(commands: string): string {
        let count = 0;
        let facing = new Direction('N');

        for (let i = 0; i < commands.length; i++) {
            if (commands[i] === 'M') {
                count = this.move(count);
            }
            if (commands[i] === 'R') {
                facing = facing.rotateRight();
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