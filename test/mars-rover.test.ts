import {MarsRover} from "../src/mars.rover";

describe('MarsRover', () => {
   it('should initialise the rover at 0:0:N', () => {
       const marsRover = new MarsRover();

       const response = marsRover.execute('');

       expect(response).toEqual('0:0:N');
   });

    it('should have coords of 0:1:N after moving one square', function () {
        const marsRover = new MarsRover();

        const response = marsRover.execute('M');

        expect(response).toEqual('0:1:N');
    });
});