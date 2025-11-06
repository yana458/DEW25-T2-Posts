/* eslint-env jest */

const Client = require('../src/client')

test('Create client', () => {
  const lu = new Client('Lucy')
  expect(lu).toEqual({
    name: 'Lucy',
    billing: 0
  })
})

test('Client reading', () => {
  const lu = new Client('Lucy')
  expect(lu.read('a article')).toBe('Lucy is reading a article')
})
