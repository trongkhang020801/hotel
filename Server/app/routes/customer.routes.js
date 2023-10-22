module.exports = app => {
    const customer = require("../controllers/customer.controller");
  
    var router = require("express").Router();
  
    // Create a new customer
    router.post("/create", customer.create);
  
    // Retrieve all customer
    router.get("/", customer.findAll);
  
    // Retrieve all published customer
    router.get("/nameCustomer/:nameCustomer", customer.findnameCustomer);
  
    // Retrieve a single customer with id
    router.get("/:id", customer.findOne);
  
    // Update a Tutorial with id
    router.put("/update/:id", customer.update);
  
    // Delete a Tutorial with id
    router.delete("/delete/:id", customer.delete);
  
    // Delete all customer
    router.delete("/", customer.deleteAll);
  
    app.use('/api/customer', router);
  };