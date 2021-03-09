export class MarsRover {
    execute(commands: string): string {
        let count = 0;
        let direction = 'N';

        for (let i = 0; i < commands.length; i++) {
            if (commands[i] === 'M') {
                count++;
                if (count > 9) {
                    count = 0;
                }
            }
            if (commands[i] === 'R') {
                if (direction == 'N') {
                    direction = 'E';
                } else if (direction == 'E') {
                    direction = 'S';
                } else if (direction == 'S') {
                    direction = 'W';
                }
            }
        }

        return '0:' + count + ':' + direction;
    }
}