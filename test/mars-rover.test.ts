import {MarsRover} from "../src/mars.rover";
describe('MarsRover', () => {
    let marsRover = null;

    beforeEach(() => {
       marsRover = new MarsRover();
    });

   it('should initialise the rover at 0:0:N', () => {
       const response = marsRover.execute('');

       expect(response).toEqual('0:0:N');
   });

    it('should have coords of 0:1:N after moving one square', function () {
        const response = marsRover.execute('M');

        expect(response).toEqual('0:1:N');
    });

    it('should have coords of 0:2:N after moving two squares', function () {
        const response = marsRover.execute('MM');

        expect(response).toEqual('0:2:N');
    });

    it('should have coords of 0:5:N after moving five squares', function () {
        const response = marsRover.execute('MMMMM');

        expect(response).toEqual('0:5:N');
    });

    it('should wrap around to 0:0:N after moving ten squares', function () {
        const response = marsRover.execute('MMMMMMMMMM');

        expect(response).toEqual('0:0:N');
    });

    it('should wrap around to 0:3:N after moving thirteen squares', function () {
        const response = marsRover.execute('MMMMMMMMMMMMM');

        expect(response).toEqual('0:3:N');
    });

    it('should have coords of 0:0:E after rotating right once', function () {
        const response = marsRover.execute('R');

        expect(response).toEqual('0:0:E');
    });

    it('should have coords of 0:0:S after rotating right twice', function () {
        const response = marsRover.execute('RR');

        expect(response).toEqual('0:0:S');
    });

    it('should have coords of 0:0:W after rotating right three times', function () {
        const response = marsRover.execute('RRR');

        expect(response).toEqual('0:0:W');
    });

    it('should have coords of 0:0:N after rotating right four times', function () {
        const response = marsRover.execute('RRRR');

        expect(response).toEqual('0:0:N');
    });

    it('should have coords of 0:0:W after rotating left once', function () {
        const response = marsRover.execute('L');

        expect(response).toEqual('0:0:W');
    });
});