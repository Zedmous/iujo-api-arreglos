const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.middlewares()
    this.pre = "/api";
    this.paths = {
      users: this.pre + "/users",
      products: this.pre + "/products",
    };
    //rutas
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static("public"));
  }
  routes = () => {
    this.app.use(this.paths.users, require("../routes/user.route"));
  };

  listen = () => {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en puerto", "localhost:" + this.port);
    });
  };
}

/*module.exports={
    Server
}*/

module.exports = Server;
