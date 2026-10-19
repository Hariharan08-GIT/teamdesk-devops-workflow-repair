const test = require('node:test');
const assert = require('node:assert/strict');
const { getTaskCount } = require('../src/tasks');

test('empty task list has count 0', () => {
  assert.equal(getTaskCount([]), 0);
});

test('one task has count 1', () => {
  assert.equal(getTaskCount(['Review change']), 1);
});

test('three tasks have count 3', () => {
  assert.equal(getTaskCount(['Review', 'Test', 'Merge']), 3);
});
