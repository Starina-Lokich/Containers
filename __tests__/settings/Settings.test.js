import Settings from '../../src/settings/Settings';

describe('Settings', () => {
  let settings;

  beforeEach(() => {
    settings = new Settings();
  });

  test('settings должен вернуть объединённый Map с дефолтными значениями', () => {
    const result = settings.settings;
    expect(result.get('theme')).toBe('dark');
    expect(result.get('music')).toBe('trance');
    expect(result.get('difficulty')).toBe('easy');
  });

  test('setSetting должен изменить одну настройку', () => {
    settings.setSetting('theme', 'light');
    expect(settings.settings.get('theme')).toBe('light');
  });

  test('setSetting должен объединять несколько настроек', () => {
    settings.setSetting('music', 'rock');
    settings.setSetting('difficulty', 'hard');

    const result = settings.settings;
    expect(result.get('music')).toBe('rock');
    expect(result.get('difficulty')).toBe('hard');
    expect(result.get('theme')).toBe('dark'); // не менялся
  });

  test('setSetting должен выбросить ошибку при недопустимом ключе', () => {
    expect(() => {
      settings.setSetting('volume', 'high');
    }).toThrow('Недопустимый ключ настройки: volume');
  });

  test('setSetting должен выбросить ошибку при недопустимом значении', () => {
    expect(() => {
      settings.setSetting('theme', 'blue');
    }).toThrow('Недопустимое значение для theme: blue');

    expect(() => {
      settings.setSetting('music', 'jazz');
    }).toThrow('Недопустимое значение для music: jazz');

    expect(() => {
      settings.setSetting('difficulty', 'insane');
    }).toThrow('Недопустимое значение для difficulty: insane');
  });
});