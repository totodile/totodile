const { Model, DataTypes, Sequelize } = require('sequelize')
const bcrypt = require('bcryptjs')

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
      sequelize: sequelize,
      tableName: 'users',
      timestamps: true,
      paranoid: true,
      hooks: {
        beforeCreate: async (user) => {
          user.password = await bcrypt.hash(user.password, 10)
        }
      }
    })
  }
}

module.exports = User
