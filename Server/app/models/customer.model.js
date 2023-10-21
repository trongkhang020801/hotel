module.exports = (sequelize, Sequelize) => {
    const Customer = sequelize.define("customer", {
      idCustomer: {
        type: Sequelize.TEXT
      },
      idDec: {
        type: Sequelize.TEXT
      },
      nameCustomer: {
        type: Sequelize.TEXT 
      },
      scoreLevel: {
        type: Sequelize.TEXT
      },
      usedScoreLevel: {
        type: Sequelize.TEXT
      },
      genderCustomer: {
        type: Sequelize.TEXT
      },
      dateOfBirth: {
        type: Sequelize.TEXT
      },
      phoneNumberCustomer: {
        type: Sequelize.TEXT
      },
      mailCustomer: {
        type: Sequelize.TEXT
      },
      addressCustomer: {
        type: Sequelize.TEXT
      } 
    });
  
    return Customer;
  };