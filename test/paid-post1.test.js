/* eslint-env jest */

const PaidPost = require('../src/paid-post')

test('Create a Paid Post', () => {
  const abc = new PaidPost('ABC', 3)
  expect(abc).toEqual({
    name: 'ABC',
    price: 3
  })
})

test('Paid Post Summary', () => {
  const abc = new PaidPost('ABC', 3)
  expect(abc.summary).toBe('ABC publication number 0')
})
