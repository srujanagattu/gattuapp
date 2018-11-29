QUnit.test('Testing name function with several sets of inputs', function (assert) {
    assert.equal(App.verifyname("aeiou"), 5, 'Tested with characters on first name');
   assert.throws(function () { verifyname("a45"); }, /The given argument is not a valid name/, 'Passing characters and numbers shows Error');
    assert.throws(function () { verifyname("b.#@&"); }, /The given argument is not a valid name/, 'Passing special character shows Error');
});