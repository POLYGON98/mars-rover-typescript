export class MarsRover {
    execute(commands: string): string {
        let count = 0;

        for (let i = 0; i < commands.length; i++) {
            if (commands[i] === 'M') {
                count++;
            }
        }

        return '0:' + count + ':N';
    }
}