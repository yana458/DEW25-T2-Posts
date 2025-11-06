/* eslint-env jest */

const PaidPost = require('../src/paid-post')
const User = require('../src/user')
const Client = require('../src/client')

test('Create PaidPost - subscribers empty', () => {
  const paidpost = new PaidPost('Total JS')
  expect(paidpost.getSubscribers()).toBe('')
})

test('Attach a client', () => {
  const paidpost = new PaidPost('Total JS')
  const pepe = new Client('Pepe')
  paidpost.attach(pepe)
  expect(paidpost.getSubscribers()).toBe('Pepe')
})

test('Don\'t Attach a user', () => {
  const paidpost = new PaidPost('Total JS')
  const pepe = new User('Pepe')
  paidpost.attach(pepe)
  expect(paidpost.getSubscribers()).toBe('')
})

test('Don\'t Attach a users and attach a client', () => {
  const paidpost = new PaidPost('Total JS')
  const pepe = new User('Pepe')
  const mary = new Client('Mary')
  paidpost.attach(pepe)
  expect(paidpost.getSubscribers()).toBe('')
  paidpost.attach(mary)
  expect(paidpost.getSubscribers()).toBe('Mary')
})

test('Avoid attach the same client twice', () => {
  const paidpost = new PaidPost('Total JS')
  const pepe = new Client('Pepe')
  paidpost.attach(pepe)
  expect(paidpost.getSubscribers()).toBe('Pepe')
  paidpost.attach(pepe)
  expect(paidpost.getSubscribers()).toBe('Pepe')
})

test('Attach client and detach', () => {
  const paidpost = new PaidPost('Total JS')
  const pepe = new Client('Pepe')
  paidpost.attach(pepe)
  expect(paidpost.getSubscribers()).toBe('Pepe')
  paidpost.detach(pepe)
  expect(paidpost.getSubscribers()).toBe('')
})
