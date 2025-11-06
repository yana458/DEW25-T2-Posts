/* eslint-env jest */

const User = require('../src/user')

test('Create user', () => {
  const user = new User('Pepe')
  expect(user).toEqual({
    name: 'Pepe'
  })
})

test('User reading', () => {
  const user = new User('Pepe')
  expect(user.read('a comic')).toBe('Pepe is reading a comic')

  const user2 = new User('Maria')
  expect(user2.read('a book')).toBe('Maria is reading a book')
})
