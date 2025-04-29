export default class Settings {
    constructor() {
      this.defaultSettings = new Map([
        ['theme', 'dark'],
        ['music', 'trance'],
        ['difficulty', 'easy'],
      ]);
  
      this.userSettings = new Map();
    }
  
    setSetting(key, value) {
      const validKeys = ['theme', 'music', 'difficulty'];
      const validThemeValues = ['dark', 'light', 'gray'];
      const validMusicValues = ['trance', 'pop', 'rock', 'chillout', 'off'];
      const validDifficultyValues = ['easy', 'normal', 'hard', 'nightmare'];
  
      if (!validKeys.includes(key)) {
        throw new Error(`Недопустимый ключ настройки: ${key}`);
      }
  
      switch (key) {
        case 'theme':
          if (!validThemeValues.includes(value)) {
            throw new Error(`Недопустимое значение для theme: ${value}`);
          }
          break;
        case 'music':
          if (!validMusicValues.includes(value)) {
            throw new Error(`Недопустимое значение для music: ${value}`);
          }
          break;
        case 'difficulty':
          if (!validDifficultyValues.includes(value)) {
            throw new Error(`Недопустимое значение для difficulty: ${value}`);
          }
          break;
      }
  
      this.userSettings.set(key, value);
    }
  
    get settings() {
      const finalSettings = new Map(this.defaultSettings);
      for (const [key, value] of this.userSettings) {
        finalSettings.set(key, value);
      }
      return finalSettings;
    }
  }