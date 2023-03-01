/* eslint-disable no-undef */
const { describe, it, expect } = require('@jest/globals')
const request = require('supertest')
const app = require('../../index')
const paymentStatus = require('../../api/helpers/paymentStatus')

let server
beforeEach(() => {
    const port = 3000
    server = app.listen(port)
})

afterEach(() => {
    server.close()
})

describe('GET /api/payments/id', () => {
    it('Must detail a payment', async () => {
        const id = 1
        const response = await request(app)

            .get(`/api/payments/${id}`)
            .expect('content-type', /json/)
            .expect(200)
        expect(response.body).toHaveProperty('status')
    })
})

describe('POST /api/payments', () => {
    it('Must create a payment', async () => {
        const response = await request(app)

            .post('/api/payments')
            .send({
                amount: 3000,
                cardHolder: 'Noah Ferreira',
                cardNumber: '4556487987422903',
                cardExp: '2024-08',
                cardCvv: '321'
            })
            .expect(201)
        expect(response.body.status).toBe(paymentStatus.CREATED)
    })
})

describe('PATCH /api/payments/id', () => {
    it.each([
        paymentStatus.CANCELED,
        paymentStatus.CONFIRMED
    ])('Must return 409 if current status is not CREATED', async (param) => {
        const id = 2
        await request(app)

            .patch(`/api/payments/${id}`)
            .send(param)
            .expect(409)
    })

    it('Must change status from CREATED to CONFIRMED', async () => {
        const id = 4
        await request(app)

            .patch(`/api/payments/${id}`)
            .send({
                status: paymentStatus.CONFIRMED
            })
            .expect(200)
    })

    it('Must change status from CREATED to CANCELED', async () => {
        const id = 5
        await request(app)

            .patch(`/api/payments/${id}`)
            .send({
                status: paymentStatus.CANCELED
            })
            .expect(200)
    })
})