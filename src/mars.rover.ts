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
                direction = 'E';
            }
        }

        return '0:' + count + ':' + direction;
    }
}