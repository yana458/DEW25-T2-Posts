/* eslint-env jest */

const Newspaper = require('../src/newspaper')

test('Create a newspaper', () => {
  const diario = new Newspaper('Diario de Avisos', 1, 'Santa Cruz de Tenerife')
  expect(diario).toEqual({
    name: 'Diario de Avisos',
    district: 'Santa Cruz de Tenerife',
    price: 1
  })
})

test('Newspaper Summary', () => {
  const diario = new Newspaper('Diario de Avisos', 1, 'Santa Cruz de Tenerife')
  expect(diario.summary).toBe('Diario de Avisos publication number 0 of Santa Cruz de Tenerife')
})
