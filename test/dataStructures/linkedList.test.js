require('../bootstrap.test.js');

describe('LinkedList', function() {
  it('should push and pop', ()=>{
    let sll = new LinkedList();
    sll.push(1);
    sll.push(2);
    sll.push(4);
    sll.push('str');
    sll.print();
    sll.print();
    // sll.pop();
    // let one = sll.pop();
    // one.should.equal(1);
  });
});
