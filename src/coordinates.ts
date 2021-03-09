export class Coordinates {
    private readonly _x: number;
    private readonly _y: number;

    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    get x(): number {
        return this._x;
    }

    get y(): number {
        return this._y;
    }

    public moveNorth(): Coordinates {
        let newY = this._y + 1;
        if (newY > 9) {
            newY = 0;
        }
        return new Coordinates(this._x, newY);
    }

    public moveEast(): Coordinates {
        return new Coordinates(this._x + 1, this._y);
    }
}