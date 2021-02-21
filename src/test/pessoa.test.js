const request = require('supertest');

const fs = require('fs')
const { join } = require('path')

const filePath = join(__dirname, 'pessoas.json')

const getPessoas = () => {
  const data = fs.existsSync(filePath)
    ? fs.readFileSync(filePath)
    : []

  try {
    return JSON.parse(data)
  } catch (error) {
    return []
  }
}
const savePessoa = (pessoas) => fs.writeFileSync(filePath, JSON.stringify(pessoas, null, '\t'))


describe('GET /pessoas', () => {
  test('deve buscar pessoas', async () => {

    const response = await request('http://localhost:3000/pessoas', 'get');
    expect(response.body.length).toBe(2);
    expect(response.body[0]).toHaveProperty("id");
    expect(response.body[0]).toHaveProperty("name");
    expect(response.statusCode).toBe(200);
   


  })
});

describe('POST /pessoas', async () => {
  test('deve cadastra uma pessoas', async () => {
    const data = {
      "nome": "jao",
      "datanascimento": "13/02/2021",
      "cpf": "1234567898",
      "ativo": true,
      "meta": null
    }
    const response = await request('http://localhost:3000/pessoas', 'post', data);
    
    const pessoa = response.data;
    savePessoa(pessoa)
    console.log(pessoa)

  })
});

describe('PUT /pessoas/:id', () => {
  test('deve atualizar uma pessoas', async (req, res) => {
    const data = {
      "pessoa_id": "10",
      "nome": "maria",
      "dataNascimento": "12/02/1258",
      "cpf": "123456789",
      "ativo": "1",
      "meta": 2000
    }
    const response = await request('http://localhost:3000/pessoas', 'put', data);
    const pessoas = getPessoas()
    savePessoa(pessoas.map(pessoa => {
      if (pessoa.id === req.params.pessoa_id) {
        return {
          ...pessoa,
          ...req.body
        }
      }
      return pessoa
    }))


  })
});
