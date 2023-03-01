/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const { describe, it, expect } = require('@jest/globals')
const request = require('supertest')
const app = require('../../app')

let server
beforeEach(() => {
    const port = 3000
    server = app.listen(port)
})

afterEach(() => {
    server.close()
})

describe('GET /api/products', () => {
    it('Must list all products', async () => {
        await request(app)

            .get('/api/products')
            .expect('content-type', /json/)
            .set('Accept', 'application/json')
            .expect(200)
    })
})

describe('GET /api/products/id', () => {
    it('Must detail a product', async () => {
        const id = '63f8f82a32b9f1957bedd4db'
        await request(app)

            .get(`/api/products/${id}`)
            .expect('content-type', /json/)
            .set('Accept', 'application/json')
            .expect(200)
    })
})

describe('POST /api/admin/products', () => {
    it('Must create a product', async () => {
        await request(app)

            .post('/api/admin/products')
            .set('Accept', 'application/json')
            .send({
                name: 'iPhone 20',
                description: 'iPhone 20 com mais do mesmo',
                slug: 'iphone-20',
                unitPrice: 40000,
                storage: 10,
                category: {
                    name: 'informatica',
                    categoryId: '63f8f82a32b9f1957bedd4db',
                },
            })
            .expect(201)
    })
})

describe('PUT /api/admin/products/id', () => {
    it('Must update a product', async () => {
        const id = '63f8f82a32b9f1957bedd4db'
        await request(app)

            .put(`/api/admin/products/${id}`)
            .set('Accept', 'application/json')
            .send({
                name: 'iPhone 20',
                description: 'iPhone 20 com mais do mesmo',
                slug: 'iphone-20',
                unitPrice: 40000,
                storage: 40,
                category: {
                    name: 'informatica',
                    categoryId: '63f8f82a32b9f1957bedd4db',
                },
            })
            .expect(200)
    })
})

describe('DELETE /api/admin/products/id', () => {
    it('Must delete a product', async () => {
        const id = '63f8f82a32b9f1957bedd4db'

        await request(app)
            .delete(`/api/admin/products/${id}`)
            .set('Accept', 'application/json')
            .expect(204)
    })
})