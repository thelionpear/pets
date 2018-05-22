'use strict';
module.exports = (sequelize, DataTypes) => {
  var Pet = sequelize.define('Pet', {
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    age: DataTypes.INTEGER
  }, {});
  Pet.associate = function(models) {
    // associations can be defined here
  };
  return Pet;
};