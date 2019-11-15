const app = require('../api/server.js'); // Link to your server file
const supertest = require('supertest');
const request = supertest(app);


describe("/jokes", () => {
    describe('Sample query', () => {
        
        it('Testing to see if Jest works', () => {
            expect(1).toBe(1)
          })

          it('gets the jokes endpoint', async done => {
            const response = await request.get('/jokes')
          
            expect(response.status).toBe(200)
            expect(response.body.message).toBe('pass!')
            done()
          })
      })
      
});
