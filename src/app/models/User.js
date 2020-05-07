const { Model, DataTypes, Sequelize } = require('sequelize')

class User extends Model {
  static init (sequelize) {
    super.init({
      id: {
        type: Sequelize.UUID,
        primaryKey: true
      },
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING
    }, {
      sequelize
    })
  }
}

module.exports = User
