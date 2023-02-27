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

describe('GET /api/accounts', () => {
  it('Must list all accounts', async () => {
    await request(app)

      .get(`/api/accounts`)
      .expect('content-type', /json/)
      .set('Accept', 'application/json')
      .expect(200)
  })
})

describe('GET /api/accounts/id', () => {
  it('Must detail a user', async () => {
    const id = '63f8f82a32b9f1957bedd4db'
    await request(app)

      .get(`/api/accounts/${id}`)
      .expect('content-type', /json/)
      .set('Accept', 'application/json')
      .expect(200)
  })
})

describe('POST /api/admin/accounts', () => {
  it('Must create a user', async () => {
    await request(app)

      .post(`/api/admin/accounts`)
      .set('Accept', 'application/json')
      .send({
        name: 'Joel Miller',
        email: 'joel.miller@example.com',
        password: '40f2m@nF',
        createdDate: ISODate(),
        cpf: '95153544044',
        phone: '5511991699139',
        address: {
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

describe('PUT /api/admin/accounts/id', () => {
  it('Must update a user', async () => {
    const id = '63f8f82a32b9f1957bedd4db'
    await request(app)

      .put(`/api/admin/accounts/${id}`)
      .set('Accept', 'application/json')
      .send({
        name: 'Joel Miller',
        email: 'joel.miller@example.com',
        password: '40f2m@nF',
        createdDate: ISODate(),
        cpf: '95153544044',
        phone: '5511991699139',
        address: {
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

describe('DELETE /api/admin/accounts/id', () => {
  it('Must delete a user', async () => {
    const id = '63f8f82a32b9f1957bedd4db'

    await request(app)
      .delete(`/api/admin/accounts/${id}`)
      .set('Accept', 'application/json')
      .expect(204)
  })
})