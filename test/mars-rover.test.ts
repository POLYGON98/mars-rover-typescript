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
});