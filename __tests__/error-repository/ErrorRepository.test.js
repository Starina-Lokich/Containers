import ErrorRepository from '../../src/error-repository/ErrorRepository';

describe('ErrorRepository', () => {
  let repo;

  beforeEach(() => {
    repo = new ErrorRepository();
  });

  test('translate должен вернуть описание для существующего кода', () => {
    expect(repo.translate(404)).toBe('Not Found');
    expect(repo.translate(500)).toBe('Internal Server Error');
  });

  test('translate должен вернуть "Unknown error" для неизвестного кода', () => {
    expect(repo.translate(999)).toBe('Unknown error');
    expect(repo.translate(123)).toBe('Unknown error');
  });

  test('translate должен корректно работать с граничными значениями', () => {
    expect(repo.translate(400)).toBe('Bad Request');
    expect(repo.translate(500)).toBe('Internal Server Error');
  });
});