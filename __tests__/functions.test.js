const { ageClassification, weekFn } = require('../functions');

describe('ageClassification', () => {
  test('повертає null для віку -1', () => {
    expect(ageClassification(-1)).toBe(null);
  });

  test('повертає "Дитинство" для віку 0', () => {
    expect(ageClassification(0)).toBe('Дитинство');
  });

  test('повертає "Молодість" для віку 44', () => {
    expect(ageClassification(44)).toBe('Молодість');
  });

  test('повертає "Рекорд" для віку 122', () => {
    expect(ageClassification(122)).toBe('Рекорд');
  });

  test('повертає null для віку 150', () => {
    expect(ageClassification(150)).toBe(null);
  });
});

describe('weekFn', () => {
  test('повертає "Понеділок" для значення 1', () => {
    expect(weekFn(1)).toBe('Понеділок');
  });

  test('повертає "Субота" для значення 6', () => {
    expect(weekFn(6)).toBe('Субота');
  });

  test('повертає null для значення 9', () => {
    expect(weekFn(9)).toBe(null);
  });

  test('повертає null для значення 1.5', () => {
    expect(weekFn(1.5)).toBe(null);
  });

  test('повертає null для значення "2"', () => {
    expect(weekFn('2')).toBe(null);
  });
});