describe("tree", function() {
  var tree;

  beforeEach(function() {
    tree = makeTree();
  });

  it("should have methods named 'addChild' and 'contains', and a property named 'value'", function() {
    expect(tree.addChild).toEqual(jasmine.any(Function));
    expect(tree.contains).toEqual(jasmine.any(Function));
    expect('value' in tree).toBe(true);
  });

  it("should add to children after addChild is called", function() {
    tree.addChild('first');
    expect(tree.children[0].value).toEqual('first');
    tree.addChild('second');
    expect(tree.children[1].value).toEqual('second');
    tree.children[0].addChild('first');
    expect(tree.children[0].children[0].value).toEqual('first');
  });

  it('contains should return true when the target node contains the value', function() {
    tree.value = 'first';
    expect(tree.contains('first')).toEqual(true);
  });

  it('should find values downstream of node when contains is called', function() {
    tree.addChild('first');
    tree.addChild('second');
    tree.addChild('third');
    tree.children[0].addChild('first 1');
    tree.children[0].addChild('first 2');
    tree.children[1].addChild('first 2');
    tree.children[1].children[0].addChild('first 3');
    expect(tree.contains('first 1')).toEqual(true);
    expect(tree.contains('first 3')).toEqual(true);
  });

  // Add more tests here to test the functionality of tree.
});