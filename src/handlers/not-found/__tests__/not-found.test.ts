import handleRequest from '../';

describe('Not Found handler', () => {
    it('handle GET', async () => {
        const result = await handleRequest();
        expect(result.status).toBe(404);

        const text = await result.text();
        expect(text).toBe('Not found');
    });
});
