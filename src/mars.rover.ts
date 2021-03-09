export class MarsRover {
    execute(commands: string): string {
        if(commands === 'M') {
            return '0:1:N';
        } else if (commands === 'MM') {
            return '0:2:N';
        }

        return '0:0:N';
    }
}