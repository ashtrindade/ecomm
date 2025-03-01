'use strict'
const {
    Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class Payments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
        // eslint-disable-next-line no-unused-vars
        static associate(models) {
            // define association here
        }
    }
    Payments.init({
        amount: DataTypes.INTEGER,
        cardHolder: DataTypes.STRING,
        cardNumber: DataTypes.STRING,
        cardExp: DataTypes.STRING,
        cardCvv: DataTypes.STRING,
        status: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Payments',
    })
    return Payments
}