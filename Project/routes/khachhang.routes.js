module.exports = (app) => {
  const customer = require("../controllers/khachhang.controller");

  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
    next();
  });

  app.post("/api/auth/signup", customer.createUser);

  app.post("/api/auth/signin", customer.getUser);

  app.get("/api/checkuser/email=:email", customer.checkUser)
};

