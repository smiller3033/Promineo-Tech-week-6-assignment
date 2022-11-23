let expect = chai.expect;

describe('Shuffling Function', function() {
    it('should randomize the elements in an array', function() {
        let list = [1,2,3,4,5];
        let shuffleList = shuffle([1,2,3,4,5]);
        let testShuffle = list === shuffleList;

        expect(testShuffle).to.equal(false);
    })
})