describe('MarsRover', () => {
   it('should initialise the rover at 0:0:N', () => {
       const marsRover = new MarsRover();

       const response = marsRover.execute('');

       expect(response).toEqual('0:0:N');
   });
});