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

describe('GET /api/categories', () => {
  it('Must list all categories', async () => {
    await request(app)

      .get(`/api/categories`)
      .expect('content-type', /json/)
      .set('Accept', 'application/json')
      .expect(200)
  })
})

describe('GET /api/categories/id', () => {
  it('Must detail a category', async () => {
    const id = '63f8f82a32b9f1957bedd4db'
    const response = await request(app)

      .get(`/api/categories/${id}`)
      .expect('content-type', /json/)
      .set('Accept', 'application/json')
      .expect(200)
    expect(response.body).toHaveProperty('status')
  })
})

describe('POST /api/admin/categories', () => {
  it.skip('Must create a category', async () => {
    await request(app)

      .post(`/api/admin/categories`)
      .set('Accept', 'application/json')
      .send({
        name: 'test',
        status: 'ativa',
      })
      .expect(201)
  })
})

describe('PUT /api/admin/categories/id', () => {
  it.each([
    ['name', { name: 'categoria' }],
    ['status', { status: 'ativa' }]
  ])('Must update %s', async (key, param) => {
    const id = '63f8f82a32b9f1957bedd4db'
    await request(app)

      .put(`/api/admin/categories/${id}`)
      .set('Accept', 'application/json')
      .send(param)
      .expect(200)
  })
})

describe('DELETE /api/admin/categories/id', () => {
  it('Must delete a category', async () => {
    const id = '63f8f82a32b9f1957bedd4db'

    await request(app)
      .delete(`/api/admin/categories/${id}`)
      .set('Accept', 'application/json')
      .expect(204)
  })
})