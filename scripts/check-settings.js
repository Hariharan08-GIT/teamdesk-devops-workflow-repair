const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

try {
  const settings = JSON.parse(fs.readFileSync(path.join(__dirname, '../config/team.json'), 'utf8'));
  assert.equal(settings.teamName, 'TeamDesk', 'teamName must remain TeamDesk');
  assert.equal(settings.reviewRequired, true, 'reviewRequired must be true');
  assert.equal(settings.runTestsBeforeMerge, true, 'runTestsBeforeMerge must be true');
  console.log('PASS: TeamDesk requires review and tests before merge');
} catch (error) {
  console.error('FAIL:', error.message);
  process.exitCode = 1;
}
