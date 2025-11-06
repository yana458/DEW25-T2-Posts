/* eslint-env jest */

const Gazette = require('../src/gazette')

test('Create gazette', () => {
  const gazette = new Gazette('The Streetlight')
  expect(gazette).toEqual({
    name: 'The Streetlight'
  })
})

test('Gazette Summary', () => {
  const gazette = new Gazette('The Streetlight')
  expect(gazette.summary).toBe('The Streetlight publication number 0')
})
