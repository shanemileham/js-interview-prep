require('../bootstrap.test.js');

describe('LinkedList', function() {
  it('should push and pop', ()=>{
    let sll = new LinkedList();

    // Push three things
    sll.push(1);
    sll.push(2);
    sll.push('str');
    sll.toString().should.equal('[1, 2, str]');

    // Pop 1
    const pop1 = sll.pop();
    pop1.should.equal('str');
    sll.length().should.equal(2);

    // Pop 2
    const pop2 = sll.pop();
    pop2.should.equal(2);
    sll.length().should.equal(1);

    // Pop 3
    const pop3 = sll.pop();
    pop3.should.equal(1);
    sll.length().should.equal(0);

    // Pop 4
    const pop4 = sll.pop();
    should.not.exist(pop4);
    sll.length().should.equal(0);
  });
});
