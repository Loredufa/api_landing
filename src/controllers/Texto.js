const { Landing_text } = require('../models/index')

const getAllText = async (req, res) => {
  try {
    const info = await Landing_text.findAll()
    info? res.status(200).send(info) : res.status(400).send({ message: 'No se encontraron datos' })
  } catch (error) { console.log("Algo salio mal: ", error); 
}
}

const addText = async (req,res) => {
  try {
    const info = req.body
    const newInfo = await Landing_text.create(info)
    newInfo? res.status(200).send(newInfo) : res.status(400).send({ message: 'No se guardó el texto' })
  } catch (error) { console.log("Algo salio mal: ", error);  
}
}

const getTextById = async (req, res, next) => {
  try {
    const id = req.params.id
    const info = await Landing_text.findByPk(id)
    info? res.status(200).send(info) : res.status(400).send({ message: 'No se encontró el texto' })
  } catch (error) { console.log("Algo salio mal: ", error); 
}
}

const putText = async (req, res) => {
  try {
    const id = req.params.id
    const info = req.body
    const updateInfo = await Landing_text.update(info, {
      where: {
        id,
      },
    })
    updateInfo[0] !== 0? res.status(200).send({message:'Texto actualizado'}) : 
    res.status(401).send({message:'No se puede actualizar el texto'});
  } catch (error) { console.log("Algo salio mal: ", error); 
}
}

const deleteText = async (req, res, next) => {
    try {
    const id = req.params.id
    const deleteText = await Landing_text.destroy({
      where: {
        id,
      },
    })
    deleteText? res.status(200).send({message:'Texto eliminado'}) :
    res.status(401).send({message:'No se pudo eliminar el texto'}) 
    }
    catch (error) { console.log("Algo salio mal: ", error); 
  }
  }

module.exports = {
    getAllText,
    addText,
    getTextById,
    putText,
    deleteText

}