const helloWorld = require('./helloWorld');

describe('Hello World', function() { // Basically, all it's doing is running your code and testing to see if the output is correct
  test('says "Hello, World!"', function() { //  describes what should be happening in plain english
    expect(helloWorld()).toEqual('Hello, World!');
  });
});
