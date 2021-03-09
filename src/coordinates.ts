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
        return new Coordinates(this._x, (this._y + 1) % 10);
    }

    public moveEast(): Coordinates {
        return new Coordinates(this._x + 1, this._y);
    }
}