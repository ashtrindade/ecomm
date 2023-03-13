/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const { describe, it, expect } = require('@jest/globals')
const request = require('supertest')
const app = require('../../src/index')

let server
beforeEach(() => {
    const port = 3000
    server = app.listen(port)
})

afterEach(() => {
    server.close()
})

describe('GET /api/orders', () => {
    it('Must list all orders', async () => {
        await request(app)

            .get('/api/orders')
            .expect('content-type', /json/)
            .set('Accept', 'application/json')
            .expect(200)
    })
})

describe('GET /api/orders/id', () => {
    it('Must detail a order', async () => {
        const id = '63f8f82a32b9f1957bedd4db'
        await request(app)

            .get(`/api/orders/${id}`)
            .expect('content-type', /json/)
            .set('Accept', 'application/json')
            .expect(200)
    })
})

describe('POST /api/admin/orders', () => {
    it.skip('Must create a order', async () => {
        await request(app)

            .post('/api/admin/orders')
            .set('Accept', 'application/json')
            .send({
                data: ISODate(),
                user: { '$oid': '63c7e51750236b4144c80e16' },
                itens: [
                    {
                        id: { '$oid': '63c6e0ccd3393585e806702a' },
                        name: 'Macbook Pro 16',
                        amount: 1,
                        unitPrice: { '$numberDecimal': '31752' },
                        discount: 0
                    }
                ],
                deliveryAddress: {
                    street: 'Avenida Macambira',
                    number: '781',
                    neighborhood: 'Residencial Jardim Leblon',
                    complement: 'Ap 205',
                    zipCode: '74455366',
                    city: 'Goiânia',
                    state: 'GO'
                }
            })
            .expect(201)
    })
})

describe('PUT /api/admin/orders/id', () => {
    it('Must update a order', async () => {
        const id = '63f8f82a32b9f1957bedd4db'
        await request(app)

            .put(`/api/admin/orders/${id}`)
            .set('Accept', 'application/json')
            .send({
                user: { '$oid': '63c7e51750236b4144c80e16' },
                itens: [
                    {
                        id: { '$oid': '63c6e0ccd3393585e806702a' },
                        name: 'Macbook Pro 16',
                        amount: 1,
                        unitPrice: { '$numberDecimal': '31752' },
                        discount: 0
                    }
                ],
                deliveryAddress: {
                    street: 'Avenida Macambira',
                    number: '781',
                    neighborhood: 'Residencial Jardim Leblon',
                    complement: 'Ap 205',
                    zipCode: '74455366',
                    city: 'Goiânia',
                    state: 'GO'
                }
            })
            .expect(200)
    })
})

describe('DELETE /api/admin/orders/id', () => {
    it('Must delete a order', async () => {
        const id = '63f8f82a32b9f1957bedd4db'

        await request(app)
            .delete(`/api/admin/orders/${id}`)
            .set('Accept', 'application/json')
            .expect(204)
    })
})