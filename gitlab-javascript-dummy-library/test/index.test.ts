import { gitlabJavascriptDummyLibrary } from '../src/index';

describe('Gitlab Javascript Dummy Library', () => {
    test('Says hello', async () => {
        expect(await gitlabJavascriptDummyLibrary('Jobby')).toBe('Hello, Jobby');
    });
});
