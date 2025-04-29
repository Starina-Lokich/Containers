import Team from '../../src/team/Team.js';

describe('Team', () => {
  let team;

  beforeEach(() => {
    team = new Team();
  });

  test('add должен добавить персонажа в команду', () => {
    const character = { name: 'Warrior' };
    team.add(character);
    expect(team.toArray()).toContainEqual(character);
  });

  test('add не должен позволить добавить одного и того же персонажа дважды', () => {
    const character = { name: 'Archer' };
    team.add(character);

    expect(() => {
      team.add(character);
    }).toThrow('Персонаж уже добавлен в команду');
  });

  test('addAll должен добавить несколько персонажей', () => {
    const char1 = { name: 'Mage' };
    const char2 = { name: 'Rogue' };
    team.addAll(char1, char2);

    const members = team.toArray();
    expect(members).toContainEqual(char1);
    expect(members).toContainEqual(char2);
  });

  test('addAll не должен вызывать ошибку при повторных объектах', () => {
    const char1 = { name: 'Healer' };
    const char2 = { name: 'Tank' };

    team.addAll(char1, char2, char1); // Повторение разрешено, ошибка НЕ генерируется
    const members = team.toArray();

    expect(members).toHaveLength(2); // Но в Set дубликат игнорируется
  });

  test('toArray должен вернуть массив из элементов Set', () => {
    const char1 = { name: 'Knight' };
    const char2 = { name: 'Wizard' };

    team.addAll(char1, char2);
    const arrayForm = team.toArray();

    expect(Array.isArray(arrayForm)).toBe(true);
    expect(arrayForm).toHaveLength(2);
    expect(arrayForm).toContainEqual(char1);
    expect(arrayForm).toContainEqual(char2);
  });
});