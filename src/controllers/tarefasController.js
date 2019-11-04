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




function mudarStringParaData(data){
  const dataSplit = data.split("/");
  const dataComSeparador = dataSplit[1] + "-" + dataSplit[0] + "-" + dataSplit[2];
  const dataFormatada = new Date(dataComSeparador);

return dataFormatada;
}

exports.getInclusao = (req, res) =>{
  const datasOrdenadas = tarefas.sort(function (a, b){
  if(mudarStringParaData(a.dataInclusao) < mudarStringParaData(b.dataInclusao)){
    return 1;
  }
  if (mudarStringParaData(a.dataInclusao) > mudarStringParaData(b.dataInclusao)){
    return -1;
  }
  return 0;
  });
  res.status(200).send(datasOrdenadas)
}
