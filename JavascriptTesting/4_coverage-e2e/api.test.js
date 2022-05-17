const { describe, it } = require('mocha')
const request = require('supertest')
const app = require('./api')

describe('API Suite test', () => {
    describe('/contact', () => {
        it('should request the contact page and return HTTP Status 200', async () => {
            const response = await request('/app')
                .get('/contact')
                .expect(200)
            console.log('response', response)
        })
    })
})