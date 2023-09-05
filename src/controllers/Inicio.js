const { Landing } = require('../models/index')

const getAllInicio = async (req, res) => {
  try {
    const info = await Landing.findAll()
    res.send(info)
  } catch (error) { console.log("Algo salio mal: ", error); 
    throw error; //lanzo el error
}
}

const addInicio = async (req,res) => {
  try {
    const info = req.body
    const newInfo = await Landing.create(info)
    res.send(newInfo)
  } catch (error) { console.log("Algo salio mal: ", error); 
    throw error; //lanzo el error 
}
}

const getInicioById = async (req, res, next) => {
  try {
    const id = req.params.id
    const info = await Landing.findByPk(id)
    res.send(info)
  } catch (error) { console.log("Algo salio mal: ", error); 
    throw error; //lanzo el error
}
}

const putInicio = async (req, res) => {
  try {
    const id = req.params.id
    const info = req.body
    const updateInfo = await Landing.update(info, {
      where: {
        id,
      },
    })
    res.send(updateInfo)
  } catch (error) { console.log("Algo salio mal: ", error); 
    throw error; //lanzo el error
}
}

const deleteInicio = (req, res, next) => {
  const id = req.params.id
  return Landing.destroy({
    where: {
      id,
    },
  }).then(() => {
    res.sendStatus(200)
  }).catch((error) => next(error))
}

module.exports = {
    getAllInicio,
    getInicioById,
    addInicio,
    putInicio,
    deleteInicio

}