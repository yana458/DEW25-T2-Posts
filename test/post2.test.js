/* eslint-env jest */

const Post = require('../src/post')

const User = require('../src/user')
const Client = require('../src/client')

test('Create Post - subscribers empty', () => {
  const post = new Post('Total JS')
  expect(post.getSubscribers()).toBe('')
})

test('Attach a user', () => {
  const post = new Post('Total JS')
  const pepe = new User('Pepe')
  post.attach(pepe)
  expect(post.getSubscribers()).toBe('Pepe')
})

test('Attach 2 users', () => {
  const post = new Post('Total JS')
  const pepe = new User('Pepe')
  const mary = new User('Mary')
  post.attach(pepe)
  expect(post.getSubscribers()).toBe('Pepe')
  post.attach(mary)
  expect(post.getSubscribers()).toBe('Pepe,Mary')
})

test('Attach a users and a client', () => {
  const post = new Post('Total JS')
  const pepe = new User('Pepe')
  const mary = new Client('Mary')
  post.attach(pepe)
  expect(post.getSubscribers()).toBe('Pepe')
  post.attach(mary)
  expect(post.getSubscribers()).toBe('Pepe,Mary')
})

test('Avoid attach the same user twice', () => {
  const post = new Post('Total JS')
  const pepe = new User('Pepe')
  post.attach(pepe)
  expect(post.getSubscribers()).toBe('Pepe')
  post.attach(pepe)
  expect(post.getSubscribers()).toBe('Pepe')
})

test('Attach multiple users and detach them', () => {
  const post = new Post('Total JS')
  const pepe = new User('Pepe')
  const mary = new User('Mary')
  const lucy = new User('Lucy')
  post.attach(pepe)
  expect(post.getSubscribers()).toBe('Pepe')
  post.attach(mary)
  expect(post.getSubscribers()).toBe('Pepe,Mary')
  post.attach(lucy)
  expect(post.getSubscribers()).toBe('Pepe,Mary,Lucy')
  post.detach(mary)
  expect(post.getSubscribers()).toBe('Pepe,Lucy')
  post.detach(lucy)
  expect(post.getSubscribers()).toBe('Pepe')
  post.detach(pepe)
  expect(post.getSubscribers()).toBe('')
})

test('Attach multiple users and detach one that not is subscribed', () => {
  const post = new Post('Total JS')
  const pepe = new User('Pepe')
  const mary = new User('Mary')
  const lucy = new User('Lucy')
  post.attach(pepe)
  expect(post.getSubscribers()).toBe('Pepe')
  post.attach(mary)
  expect(post.getSubscribers()).toBe('Pepe,Mary')
  post.detach(lucy)
  expect(post.getSubscribers()).toBe('Pepe,Mary')
})
