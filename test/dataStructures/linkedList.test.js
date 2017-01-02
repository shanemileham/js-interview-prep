require('../bootstrap.test.js');

describe('LinkedList', function() {
  it('should push and pop', ()=>{
    let sll = new LinkedList();

    // Push three things
    sll.push(1);
    sll.push(2);
    sll.push('str');
    sll.print();
    console.log('Length: ' + sll.length());

    // Pop 1
    const pop1 = sll.pop();
    sll.print();
    console.log('Length: ' + sll.length());
    pop1.should.equal('str');
    sll.length().should.equal(2);

    // Pop 2
    const pop2 = sll.pop();
    sll.print();
    console.log('Length: ' + sll.length());
    pop2.should.equal(2);
    sll.length().should.equal(1);

    // Pop 3
    const pop3 = sll.pop();
    sll.print();
    console.log('Length: ' + sll.length());
    pop3.should.equal(1);
    sll.length().should.equal(0);

    // Pop 4
    const pop4 = sll.pop();
    sll.print();
    console.log('Length: ' + sll.length());
    should.not.exist(pop4);
    sll.length().should.equal(0);
  });
});
