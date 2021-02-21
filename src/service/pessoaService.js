const pessoaData = require('../data/pessoaData')

exports.getPessoas =  () => {
    return pessoaData.getPessoas();
}
exports.getPessoa = (pessoa_id) => {
    return pessoaData.getPessoa(pessoa_id);
}

exports.savePessoa = (pessoa) => {
    return pessoaData.savePessoa(pessoa);
}
exports.updatePessoa = (pessoa_id, pessoa) => {
    return pessoaData.updatePessoa(pessoa_id,pessoa);
}
exports.deletePessoa = (pessoa_id) => {
    return pessoaData.deletePessoa(pessoa_id)
}
