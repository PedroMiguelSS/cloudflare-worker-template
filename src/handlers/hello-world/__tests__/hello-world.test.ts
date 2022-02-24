import handleRequest from '../';

describe('Hello World handler', () => {
    it('handle GET', async () => {
        const result = await handleRequest(new Request('/', { method: 'GET' }));
        expect(result.status).toBe(200);

        const text = await result.text();
        expect(text).toBe('Hello World');
    });
});
