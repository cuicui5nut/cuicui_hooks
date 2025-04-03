import * as cuicuiHooks from '..'

describe('cuicuiHooks', () => {
  test('exports modules should be defined', () => {
    Object.keys(cuicuiHooks).forEach((module) => {
      expect(cuicuiHooks[module as keyof typeof cuicuiHooks]).toBeDefined();
    });
  });
});
