const tarefas = require("../model/tarefas.json")




const get = (req, res) => {


  res.status(200).send(tarefas)
}
//Retornar somente a tarefa encontrada por id

const getById = (req, res) => {
  const id = req.params.id
  const tarefaPratica = tarefas.find(tarefaPratica => tarefaPratica.id == id)

  res.status(200).send(tarefaPratica)
}

const getConcluidos = (req, res) => {
  const tarefasConcluidas = tarefas.filter(tarefa => tarefa.concluido == "true")

  res.status(200).send(tarefasConcluidas)
}

const getColaborador = (req, res) => {
  const colaborador = req.params.nomeColaborador
  const nomesColaborador = tarefas.filter(nomesColaborador => nomesColaborador.nomeColaborador == colaborador)
  res.status(200).send(nomesColaborador)
}

//Você deverá listar as tarefas por data de inclusão. Das mais novas para as mais antigas.




function mudarStringParaData(data) {
  const dataSplit = data.split("/"); //estou separando os numeros a partir da / (12  10  2019)
  const dataComSeparador = dataSplit[1] + "-" + dataSplit[0] + "-" + dataSplit[2]; //concatenando usando - como separador
  const dataFormatada = new Date(dataComSeparador);
  return dataFormatada
}

const getInclusao = (req, res) => {
  const datasOrdenadas = tarefas.sort(function (a, b) {
    if (mudarStringParaData(a.dataInclusao) < mudarStringParaData(b.dataInclusao)) {
      return 1;
    }
    if (mudarStringParaData(a.dataInclusao) > mudarStringParaData(b.dataInclusao)) {
      return -1;
    }
    return 0;
  });
  res.status(200).send(datasOrdenadas)
}


//Você deverá criar, na saída do json,
// adicionar uma chave para que mostre a diferença da 
//data de inclusão com a data de finalização.

// primeiro mudar a string para data  "dataInclusao": "12/10/2019",


const getTempoTarefa = (Request, response) => {
  tarefas.forEach(tarefa => {
console.log(tarefa)

tarefa.tempoDecorrido = diferencaDias(
  conversorData(tarefa.dataInclusao),
  conversorData(tarefa.dataConclusao)
)
  })
  response.status(200).send(tarefas)
}

const conversorData = (dataString) => {
  const dia = dataString.split("/")[0]
  const mes = dataString.split("/")[1] -1
  const ano = dataString.split("/")[2]

  const dataFormatada = new Date (ano, mes, dia)
  return dataFormatada

}

const diferencaDias = (dataInicial, dataFinal) => {
  const diferecaTempo = Math.abs(dataFinal - dataInicial)
  const diferencaDias = Math.ceil(diferecaTempo / (100 * 60 * 24))
  return diferencaDias
}

module.exports = {
  get,
  getById,
  getConcluidos,
  getColaborador,
  getInclusao,
  getTempoTarefa



}
