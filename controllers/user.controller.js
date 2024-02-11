const { request, response } = require("express");

class UserController {
  constructor() {}

  getAll = (req = request, res = response) => {
    return res.status(200).json({
      msj: "Todo bien en el get all",
    });
  };
  getOne = (req = request, res = response) => {
    const { id } = req.params;
    return res.status(200).json({
      msj: "Todo bien en el get one",
      id,
    });
  };
  create = (req, res = response) => {
    const { nombre } = req.body;
    /*return res.status(200).json({
      msj: "Todo bien en el create",
      nombre,
    });*/
    return res.status(200).json({
        msj: "Todo bien en el create",
        ...req.body
    });
  };
  update = (req, res = response) => {
    const { id } = req.params;
    
    return res.status(200).json({
        msj: "Todo bien en el update",
        ...req.body,
        id
      });
  };
  delete = (req, res = response) => {
    const { id } = req.params;

    return res.status(200).json({
        msj: "Todo bien en el detele",
        id
    })
  };
}
module.exports = UserController;
