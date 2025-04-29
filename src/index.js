import Team from './team/Team.js';
import ErrorRepository from './error-repository/ErrorRepository.js';
import Settings from './settings/Settings.js';

// === Работа с Team ===
console.log('=== Команда персонажей ===');
const team = new Team();

const warrior = { name: 'Воин' };
const archer = { name: 'Лучник' };
const healer = { name: 'Целитель' };

team.add(warrior);
team.addAll(archer, healer, warrior); // Добавляем с дубликатами

console.log('Состав команды:');
console.log(team.toArray().map((member) => member.name).join(', '));


// === Работа с ErrorRepository ===
console.log('\n=== Хранилище ошибок ===');
const errorRepo = new ErrorRepository();

console.log('Ошибка 404:', errorRepo.translate(404));
console.log('Ошибка 500:', errorRepo.translate(500));
console.log('Неизвестная ошибка:', errorRepo.translate(999));


// === Работа с Settings ===
console.log('\n=== Настройки игры ===');
const gameSettings = new Settings();

gameSettings.setSetting('theme', 'light');
gameSettings.setSetting('music', 'rock');
gameSettings.setSetting('difficulty', 'hard');

console.log('Текущие настройки:');
for (const [key, value] of gameSettings.settings.entries()) {
  console.log(` - ${key}: ${value}`);
}