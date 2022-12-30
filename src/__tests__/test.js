import Magician from '../js/Magician';
import Deamon from '../js/Daemon';

test.each([
  [100, 1],
  [85, 2],
  [72, 3],
  [60, 4],
  [48, 5],
])('testing obtaining attack power of %p magician when the character is located on the %i cell', (result, cell) => {
  const pAttack = 100;
  const character = new Magician(pAttack, cell);
  expect(character.stoned()).toBe(result);
});

test.each([
  [100, 1],
  [85, 2],
  [72, 3],
  [60, 4],
  [48, 5],
])('testing obtaining attack power of %p deamon when the character is located on the %i cell', (result, cell) => {
  const pAttack = 100;
  const character = new Deamon(pAttack, cell);
  expect(character.stoned()).toBe(result);
});
