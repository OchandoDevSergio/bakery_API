const { Production, Sequelize } = require('../models');
const productionsController = {};

productionsController.getAllProductions = async (req, res) => {

    try {

        const allProductions = await Production.findAll();

        return res.json({
            success: true,
            message: "Datos de todos los reportes de producción recuperados",
            data: allProductions,
        });


    } catch (error) {

        return res.status(500).json({
            success: false,
            message: "Los datos no han podido ser recuperados",
            error: error.message,
        });
    }
}

productionsController.reportProduction = async (req, res) => {
    try {
  
      const newProduction = await Production.create({
        cantidad: req.body.cantidad,
        fecha: req.body.fecha,
      });
  
      return res.send(newProduction);
  
    } catch (error) {
      return res.json({
        success: false,
        message: "No ha sido posible reportar la producción",
        error: error.message,
      });
    }
  }

productionsController.getProductionsInTime = async (req, res) => {
    let fechaInicio = req.body.fechaInicial;
    let fechaFin = req.body.fechaFinal;
    fechaInicio = new Date(fechaInicio)
    fechaFin = new Date(fechaFin)
    const Op = Sequelize.Op;
    try {
  
      const productions = await Production.findAll(
        {
          where:{ fecha:
            {[Op.between] : [fechaInicio , fechaFin ]}
        }
        }
      );
  
      return res.json({
        success: true,
        data: productions,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "No se han podido remitir los reportes de producción",
        error: error.message,
      });
    }
  };

module.exports = productionsController;