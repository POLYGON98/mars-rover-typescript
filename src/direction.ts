export class Direction {

    private readonly _direction: string;

    constructor(direction: string) {
        this._direction = direction;
    }

    get direction(): string {
        return this._direction;
    }

    public rotateRight(): Direction {
        if (this._direction === 'N') {
            return new Direction('E');
        } else if (this._direction === 'E') {
            return new Direction('S');
        } else if (this._direction === 'S') {
            return new Direction('W');
        } else {
            return new Direction('N');
        }
    }

    public rotateLeft(): Direction {
        if (this._direction === 'N') {
            return new Direction('W');
        } else if (this._direction === 'E') {
            return new Direction('N');
        } else if (this._direction === 'S') {
            return new Direction('E');
        } else {
            return new Direction('S');
        }
    }
}