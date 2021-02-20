const fs =  require ('fs')
const {join} = require('path')


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

const ApiUrl = "'http://localhost:3000/pessoas";




describe("GET /pessoas", () => {
  
test ("Deve buscar todas as pessoas", async () => {
  await request.get(ApiUrl)
  .get((req, res) => {
    const pessoas = getPessoas()
    res.send({pessoas})
  })
  .expect(200)
  .then(response => {
    expect(response.body.pessoa_id).toHaveLength(1);
  });
})
})


describe("POST /pessoas", () => {
  
  test ("Deve inserir  pessoas", async () => {
    await request.post(ApiUrl)
    const pessoas =  getPessoas()
    .post((req, res) => {
      pessoas.push(req.body)
            savePessoa(pessoas)

    })
    .expect(201)
  })
  })


describe("Put/pessoas/:id", () => {
  
  test ("Deve atualizar  pessoas", async () => {
    await request.post(ApiUrl)
    .put((req, res) => {
      const pessoas =  getPessoas()
      savePessoa(pessoas.map(pessoa => {
          if (pessoa.id === req.params.pessoa_id) {
              return {
                  ... pessoa,
                  ... req.body
              }
          }
          return pessoa
      }))
    .expect(200)
  })
})


describe("DELETE/pessoas/:id", () => {
  
  test ("Deve excluir uma  pessoas", async () => {
    await request.post(ApiUrl)
    .delete((req, res) => {
      const pessoas =  getPessoas()

      savePessoa(pessoas.filter(pessoa =>
          pessoa.id !== req.params.pessoa_id))

      })
    .expect(200)
  })
})

