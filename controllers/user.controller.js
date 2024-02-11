const { request, response } = require("express");
let { partipantes } = require("../arrays/database.arrays");
const User = require("../models/user.model");
class UserController {
  constructor() {}

  getAll = (req = request, res = response) => {
  
    return res.status(200).json({
      users:partipantes
    });
  };
  getOne = (req = request, res = response) => {
    const { id } = req.params;

    let user=partipantes.find((user)=>{
      if(user.id==id){
        return true
      }
    })
    if(!user){
      return res.status(404).json({
        msj: "No existe un usuario con ese id",
        id
      });
    }
    return res.status(200).json({
      msj: "Todo bien en el get one",
      user
    });
  };
  create = (req, res = response) => {
    const { firstname,lastname, email } = req.body;
    let user= new User(firstname,lastname,email)
    partipantes.push(user)
    return res.status(200).json({
        msj: "Usuario creado exitosamente",
        user
    });
  };
  update = (req, res = response) => {
    const { id } = req.params;
    const { firstname,lastname, email } = req.body;
    let user= new User(firstname,lastname,email)
    let indice=partipantes.findIndex((user)=>{
      if(user.id==id){
        return true
      }
    })

    partipantes[indice]=user;
    return res.status(200).json({
        msj: "Datos actualizados",
        user:partipantes[indice]
      });
  };
  delete = (req, res = response) => {
    const { id } = req.params;
    let indice=partipantes.findIndex((user)=>{
      if(user.id==id){
        return true
      }
    })
  
    let user=partipantes.splice(indice,1)

    return res.status(200).json({
        msj: "Usuario eliminado",
        user
    })
  };
}
module.exports = UserController;
