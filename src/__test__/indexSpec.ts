import supertest from "supertest";
import app from '../index';


// create a request object
const request = supertest(app);

describe('Test basic endpoint server', () => {
    it('Get the / endpoint',async () => {
        const response = await request.get('/');
        expect(response.status).toBe(200);
    })
});