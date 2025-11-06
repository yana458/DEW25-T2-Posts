/* eslint-env jest */

const Client = require('../src/client')
const Magazine = require('../src/magazine')
const Post = require('../src/post')
const User = require('../src/user')

test('Notificar publicación genérica', () => {
  const user = new User('Pepe')
  const post = new Post('Publicación genérica')
  expect(user.notify(post)).toBe('Pepe is reading Publicación genérica publication number 0')
})

test('Notificar a un cliente una revista', () => {
  const user = new Client('Pepe')
  const post = new Magazine('Total JS', 2.99, 'Programming')
  expect(user.notify(post)).toBe('Pepe is reading Total JS publication number 0 of Programming')
})
