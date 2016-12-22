require('../bootstrap.test.js');

describe('Stack', function() {
  it('should just be an array', ()=>{});

  it('should push and pop', ()=>{
    let stack = new Stack();
    stack.push(1);
    stack.push('str');
    stack.pop();
    let one = stack.pop();
    one.should.equal(1);
  });
});
