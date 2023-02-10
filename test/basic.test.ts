import { assert, expect, test } from 'vitest'

// Edit an assertion and save to see HMR in action

test('stdio flush test', () => {
  console.log('test')
  // should see "test" in log but don't always
  expect(false).toBeTruthy();
})