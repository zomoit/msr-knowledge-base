const test = require('node:test');
const assert = require('node:assert/strict');

test('repository smoke test', () => {
  assert.equal(typeof process.version, 'string');
  assert.ok(process.version.startsWith('v'));
});
