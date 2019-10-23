describe('Split Array function', function() {
  // your code here
  it('Split Array helper function handles an empty array', function() {
    expect(split([])).toEqual([]);
  });
  it('Split array helper function handles a one item array', function() {
    expect(split([3])).toEqual([3]);
  });

  it('Split array helper function handles a long array', function() {
    expect(split([1, 2, 3, 4, 5, 6])).toEqual([[1, 2, 3], [4, 5, 6]]);
    expect(split([3, 7, 9, 1, 4, 5, 2])).toEqual([[3, 7, 9, 1], [4, 5, 2]]);
  });

  it('Merge helper function handles two one item array', function() {
    expect(merge([[3], [4]])).toEqual([3, 4]);
  });

  it('Merge helper function is able to merge two sorted arrays into one sorted array', function() {
    expect(merge([[1, 2, 3], [4, 5, 6]])).toEqual([1, 2, 3, 4, 5, 6]);
    expect(merge([[5, 20, 25, 30], [6, 15, 22]])).toEqual([
      5,
      6,
      15,
      20,
      22,
      25,
      30
    ]);
  });

  it('mergeSort handles one item array', function() {
    expect(mergeSort([3])).toEqual([3]);
  });

  it('mergeSort is able to sort an array', function() {
    expect(mergeSort([6, 5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5, 6]);
    expect(mergeSort([5, 20, 25, 30, 6, 15, 22])).toEqual([
      5,
      6,
      15,
      20,
      22,
      25,
      30
    ]);
  });
});
