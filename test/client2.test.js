/* eslint-env jest */

const Client = require('../src/client')
const Gazette = require('../src/gazette')
const Magazine = require('../src/magazine')
const Newspaper = require('../src/newspaper')

test('Notificar publicación genérica (gratis)', () => {
  const user = new Client('Pepe')
  const post = new Gazette('The Streetlight')
  expect(user.notify(post)).toBe('Pepe is reading The Streetlight publication number 0')
  expect(user.billing).toBe(0)
})

test('Notificar a un cliente una revista', () => {
  const user = new Client('Pepe')
  const post = new Magazine('Total JS', 2.99, 'Programming')
  expect(user.notify(post)).toBe('Pepe is reading Total JS publication number 0 of Programming')
  expect(user.billing).toBe(2.99)
})

test('Notificar a un cliente una gazeta, una revista y un periódico 2 veces', () => {
  const user = new Client('Pepe')
  const gazette = new Gazette('The Streetlight')
  const magazine = new Magazine('Total JS', 2.99, 'Programming')
  const newspaper = new Newspaper('Diario de Avisos', 1.15, 'Santa Cruz de Tenerife')
  user.notify(magazine)
  expect(user.billing).toBe(2.99)
  user.notify(newspaper)
  expect(user.billing).toEqual(4.14)
  user.notify(gazette)
  expect(user.billing).toBe(4.14)
  user.notify(newspaper)
  expect(user.billing).toBe(5.29)
})
