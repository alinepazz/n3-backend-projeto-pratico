const tarefas = require("../model/tarefas.json")


 

exports.get = (req, res) => {
  

  res.status(200).send(tarefas)
}

exports.getById = (req, res) => {
  const id = req.params.id
  const tarefaPratica = tarefas.find(tarefaPratica =>tarefaPratica.id == id)

  res.status(200).send(tarefaPratica)
}

exports.getConcluidos = (req, res) => {
 const tarefasConcluidas = tarefas.filter(tarefa => tarefa.concluido == "true")
 
 res.status(200).send(tarefasConcluidas)
}
exports.getColaborador = (req, res) => {
  const colaborador = req.params.nomeColaborador
  const nomesColaborador = tarefas.filter(nomesColaborador => nomesColaborador.nomeColaborador == colaborador)
  res.status(200).send(nomesColaborador)
}
exports.getInclusao = (req, res) => {
  const data = tarefas.sort(function (a, b) {
    if (a.dataInclusao > b.dataInclusao) {
      return 1;
    }
    if (a.dataInclusao < b.dataInclusao) {
      return -1;
    }
  
    return 0;
  });
  res.status(200).send(data)

}
 