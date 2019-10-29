const tarefas = require("../model/tarefas.json")


 

exports.get = (req, res) => {
  

  res.status(200).send(tarefas)
}

exports.getById = (req, res) => {
  const id = req.params.id
  const tarefaPratica = tarefas.find(tarefaPratica =>tarefaPratica.id == id)
 
  res.status(200).send(tarefaPratica)
}