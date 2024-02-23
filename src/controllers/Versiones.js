const { Version } = require('../models/index')

const getAllVersion = async (req, res) => {
  try {
    const info = await Version.findAll()
    info? res.status(200).send(JSON.stringify(info)) : res.status(400).send({ message: 'No se encontraron datos' })
  } catch (error) { console.log("Algo salio mal: ", error); 
}
}

const addVersion = async (req,res) => {
  try {
    const info = req.body
    const newInfo = await Version.create(info)
    newInfo? res.status(200).send(newInfo) : res.status(400).send({ message: 'No se guardó la versión nueva' })
  } catch (error) { console.log("Algo salio mal: ", error);  
}
}

const getVersionById = async (req, res, next) => {
  try {
    const id = req.params.id
    const info = await Version.findByPk(id)
    const version = `${info.major}.${info.minor}`;
    info? res.status(200).send(version) : res.status(400).send({ message: 'No se encontró la versión' })
  } catch (error) { console.log("Algo salio mal: ", error); 
}
}

const putVersion = async (req, res) => {
  try {
    const id = req.params.id
    const info = req.body
    const updateInfo = await Version.update(info, {
      where: {
        id,
      },
    })
    updateInfo[0] !== 0? res.status(200).send({message:'Versión actualizada'}) : 
    res.status(401).send({message:'No se puede actualizar la versión'});
  } catch (error) { console.log("Algo salio mal: ", error); 
}
}

const deleteVersion = async (req, res, next) => {
    try {
    const id = req.params.id
    const deleteText = await Version.destroy({
      where: {
        id,
      },
    })
    deleteText? res.status(200).send({message:'Versión eliminada'}) :
    res.status(401).send({message:'No se pudo eliminar la versión'}) 
    }
    catch (error) { console.log("Algo salio mal: ", error); 
  }
  }

module.exports = {
    getAllVersion,
    addVersion,
    getVersionById,
    putVersion,
    deleteVersion
}