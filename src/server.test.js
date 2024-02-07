const server = require('./server');
const supertest = require('supertest');

const request = supertest(server);

test('hello endpoint', async ()=> {
    const response = await request.get('/hello');
    expect(response.text).toBe('hello!');
});

test('goodbye endpoint', async ()=> {
    const response = await request.get('/goodbye');
    expect(response.text).toBe('goodbye');
});

test('check if return is Gandalf', async ()=> {
    const response = await request.get('/person');
    expect(response.text).toEqual('Gandalf');
});