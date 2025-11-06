/* eslint-env jest */

const Magazine = require('../src/magazine')

test('Create a Magazine', () => {
  const magazine = new Magazine('Total JS', 2.99, 'Programming')
  expect(magazine).toEqual({
    name: 'Total JS',
    topic: 'Programming',
    price: 2.99
  })
})

test('Magazine Summary', () => {
  const magazine = new Magazine('Total JS', 2.99, 'Programming')
  expect(magazine.summary).toBe('Total JS publication number 0 of Programming')
})
