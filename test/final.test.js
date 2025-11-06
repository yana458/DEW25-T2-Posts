/* eslint-env jest */

const User = require('../src/user')
const Client = require('../src/client')
const Gazette = require('../src/gazette')
const Magazine = require('../src/magazine')
const Newspaper = require('../src/newspaper')

const gazette = new Gazette('The Streetlight')
const magazine = new Magazine('Total JS', 2.99, 'Programming')
const diario = new Newspaper('Diario de Avisos', 1.15, 'Santa Cruz de Tenerife')
const provincia = new Newspaper('La Provincia', 0.99, 'Las Palmas')

const pepe = new Client('Pepe')
const mary = new Client('Mary')
const lucy = new User('Lucy')
const toby = new Client('Toby')
const ann = new Client('Ann')

// Pepe, Mary, Lucy and Toby have subscribed to The Streetlight.
gazette.attach(pepe)
gazette.attach(mary)
gazette.attach(lucy)
gazette.attach(toby)

// Mary and Toby have subscribed to Total JS.
magazine.attach(mary)
magazine.attach(toby)

// Mary, Toby and Ann have subscriber to Diario de Avisos
diario.attach(mary)
diario.attach(toby)
diario.attach(ann)

// Pepe has subscriber to La Provincia
provincia.attach(pepe)

test('La Provincia has been published', () => {
  const reading = provincia.publish()
  expect(reading).toContain('Pepe is reading La Provincia publication number 1 of Las Palmas')
  expect(reading).not.toContain('Mary is reading La Provincia publication number 1 of Las Palmas')
  expect(reading).not.toContain('Lucy is reading La Provincia publication number 1 of Las Palmas')
  expect(reading).not.toContain('Toby is reading La Provincia publication number 1 of Las Palmas')
  expect(reading).not.toContain('Ann is reading La Provincia publication number 1 of Las Palmas')
  expect(pepe.billing).toBe(0.99)
  expect(mary.billing).toBe(0)
  expect(lucy.billing).toBeUndefined()
  expect(toby.billing).toBe(0)
  expect(ann.billing).toBe(0)
})

test('La Provincia has been published again', () => {
  const reading = provincia.publish()
  expect(reading).toContain('Pepe is reading La Provincia publication number 2 of Las Palmas')
  expect(reading).not.toContain('Mary is reading La Provincia publication number 2 of Las Palmas')
  expect(reading).not.toContain('Lucy is reading La Provincia publication number 2 of Las Palmas')
  expect(reading).not.toContain('Toby is reading La Provincia publication number 2 of Las Palmas')
  expect(reading).not.toContain('Ann is reading La Provincia publication number 2 of Las Palmas')
  expect(pepe.billing).toBe(1.98)
  expect(mary.billing).toBe(0)
  expect(lucy.billing).toBeUndefined()
  expect(toby.billing).toBe(0)
  expect(ann.billing).toBe(0)
})

test('The Streetlight has been published', () => {
  const reading = gazette.publish()
  expect(reading).toContain('Pepe is reading The Streetlight publication number 1')
  expect(reading).toContain('Mary is reading The Streetlight publication number 1')
  expect(reading).toContain('Lucy is reading The Streetlight publication number 1')
  expect(reading).toContain('Toby is reading The Streetlight publication number 1')
  expect(reading).not.toContain('Ann is reading The Streetlight publication number 1')
  expect(pepe.billing).toBe(1.98)
  expect(mary.billing).toBe(0)
  expect(lucy.billing).toBeUndefined()
  expect(toby.billing).toBe(0)
  expect(ann.billing).toBe(0)
})

test('Diario de Avisos has been published', () => {
  const reading = diario.publish()
  expect(reading).not.toContain('Pepe is reading Diario de Avisos publication number 1 of Santa Cruz de Tenerife')
  expect(reading).toContain('Mary is reading Diario de Avisos publication number 1 of Santa Cruz de Tenerife')
  expect(reading).not.toContain('Lucy is reading Diario de Avisos publication number 1 of Santa Cruz de Tenerife')
  expect(reading).toContain('Toby is reading Diario de Avisos publication number 1 of Santa Cruz de Tenerife')
  expect(reading).toContain('Ann is reading Diario de Avisos publication number 1 of Santa Cruz de Tenerife')
  expect(pepe.billing).toBe(1.98)
  expect(mary.billing).toBe(1.15)
  expect(lucy.billing).toBeUndefined()
  expect(toby.billing).toBe(1.15)
  expect(ann.billing).toBe(1.15)
})

test('Total JS has been published', () => {
  const reading = magazine.publish()
  expect(reading).not.toContain('Pepe is reading Total JS publication number 1 of Programming')
  expect(reading).toContain('Mary is reading Total JS publication number 1 of Programming')
  expect(reading).not.toContain('Lucy is reading Total JS publication number 1 of Programming')
  expect(reading).toContain('Toby is reading Total JS publication number 1 of Programming')
  expect(reading).not.toContain('Ann is reading Total JS publication number 1 of Programming')
  expect(pepe.billing).toBe(1.98)
  expect(mary.billing).toBe(4.14)
  expect(lucy.billing).toBeUndefined()
  expect(toby.billing).toBe(4.14)
  expect(ann.billing).toBe(1.15)
})

test('Diario de Avisos has been published again (2)', () => {
  const reading = diario.publish()
  expect(reading).not.toContain('Pepe is reading Diario de Avisos publication number 2 of Santa Cruz de Tenerife')
  expect(reading).toContain('Mary is reading Diario de Avisos publication number 2 of Santa Cruz de Tenerife')
  expect(reading).not.toContain('Lucy is reading Diario de Avisos publication number 2 of Santa Cruz de Tenerife')
  expect(reading).toContain('Toby is reading Diario de Avisos publication number 2 of Santa Cruz de Tenerife')
  expect(reading).toContain('Ann is reading Diario de Avisos publication number 2 of Santa Cruz de Tenerife')
  expect(pepe.billing).toBe(1.98)
  expect(mary.billing).toBe(5.29)
  expect(lucy.billing).toBeUndefined()
  expect(toby.billing).toBe(5.29)
  expect(ann.billing).toBe(2.3)
})
