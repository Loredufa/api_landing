const { Landing } = require('../models/index')


const getAllInicio = async (req, res) => {
  try {
    const info = await Landing.findAll()
    info? res.status(200).send(info) : res.status(400).send({ message: 'No se encontraron datos' })
  } catch (error) { console.log("Algo salio mal: ", error); 
}
}

const getInicioByOrder = async (req, res) => {
  try {
    const info = await Landing.findAll();
    console.log('SOY INFO', info);

    if (info) {
      // Filtrar elementos activos
      const activos = info.filter(e => e.dataValues.activo === 'true');
      console.log('SOY ACTIVOS', activos);

      // Ordenar de menor a mayor, si es necesario
      activos.sort((a, b) => parseInt(a.dataValues.posicion) - parseInt(b.dataValues.posicion));
      console.log('SOY ORDEN', activos);

      res.status(200).send(activos);
    } else {
      res.status(400).send({ message: 'No se encontraron datos' });
    }
  } catch (error) {
    console.log("Algo salió mal: ", error);
    res.status(500).send({ message: 'Error en el servidor' });
  }
}


const addInicio = async (req,res) => {
  try {
    const info = req.body
    const newInfo = await Landing.create(info)
    newInfo? res.status(200).send(newInfo) : res.status(400).send({ message: 'No se guardó la promoción' })
  } catch (error) { console.log("Algo salio mal: ", error); 
}
}

const getInicioById = async (req, res, next) => {
  try {
    const id = req.params.id
    const info = await Landing.findByPk(id)
    info? res.status(200).send(info) : res.status(400).send({ message: 'No se encontró la promoción'})
  } catch (error) { console.log("Algo salio mal: ", error); 
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
    updateInfo[0] !== 0? res.status(200).send({message:'Promoción actualizada'}) : 
    res.status(401).send({message:'No se puede actualizar la promoción'});
  } catch (error) { console.log("Algo salio mal: ", error); 
}
}

const deleteInicio = async (req, res, next) => {
  try {
  const id = req.params.id
  const deleteText = await Landing.destroy({
    where: {
      id,
    },
  })
  deleteText? res.status(200).send({message:'Promoción eliminada'}) :
  res.status(401).send({message:'No se pudo eliminar la promoción'}) 
  }
  catch (error) { console.log("Algo salio mal: ", error); 
}
}

module.exports = {
    getAllInicio,
    getInicioById,
    addInicio,
    putInicio,
    deleteInicio,
    getInicioByOrder

}