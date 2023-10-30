const db = require("../models");
const Customer = db.customers;
const Op = db.Sequelize.Op;

// Create and Save a new Customer
exports.create = (req, res) => {
  // Validate request
  if (!req.body.idCustomer) {
    res.status(400).send({
      message: "idCustomer cannot be left blank!"
    });
    return;
  }

  // Create a Customer
  const customer = {
    idCustomer: req.body.idCustomer,
    idDec: req.body.idDec,
    nameCustomer: req.body.nameCustomer,
    scoreLevel: req.body.scoreLevel,
    usedScoreLevel: req.body.usedScoreLevel,
    genderCustomer: req.body.genderCustomer,
    dateOfBirth: req.body.dateOfBirth,
    phoneNumberCustomer: req.body.phoneNumberCustomer,
    mailCustomer: req.body.mailCustomer,
    addressCustomer: req.body.addressCustomer,
  };

  // Save Tutorial in the database
  Customer.create(customer)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the customer."
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (rep, res) => {
  Customer.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

// Find a single customer with an idCustomer
exports.findOne = (req, res) => {
  const id = req.params.id;

    Customer.findOne({where: {idCustomer: id}})
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Customer with idCustomer=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Customer with idCustomer=" + id
      });
    });
};

// Update a Customer by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Customer.update(req.body, {
    where: { idCustomer: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "customer was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot updatecustomerl with idCustomer=${id}. Maybe Customer was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating customer with idCustomer=" + id
      });
    });
};

// Delete a customer with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Customer.destroy({
    where: { idCustomer: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "customer was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete customer with id=${id}. Maybe customer was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete customer with id=" + id
      });
    });
};

// Delete all Customer from the database.
exports.deleteAll = (req, res) => {
    Customer.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Tcustomer were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tcustomer."
      });
    });
};

// find all published customer
exports.findnameCustomer = (req, res) => {
  const name = req.params.nameCustomer
    Customer.findOne({ where: { nameCustomer: name } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customer."
      });
    });
};
exports.LoginCustomer = (req, res) =>{
  
  const id = req.body.idCustomer;
  const mailCustomer = req.body.mailCustomer;
    Customer.findOne({where: {idCustomer: id, mailCustomer: mailCustomer}})
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Customer with idCustomer=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Customer with idCustomer=" + id
      });
    });
}