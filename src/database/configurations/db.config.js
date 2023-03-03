const { Sequelize, Model, DataTypes } = require("sequelize");
const logger = require('../../logger/api.logger');

const connect = () => {

    const hostName = process.env.HOST;
    const userName = process.env.POSTGRES_USER;
    const password = process.env.POSTGRES_PW;
    const database = process.env.POSTGRES_DB;
    const dialect = process.env.DIALECT;

    const sequelize = new Sequelize(database, userName, password, {
        host: hostName,
        dialect: dialect,
        pool: {
            max: 10,
            min: 0,
            acquire: 20000,
            idle: 5000
        }
    });

    const db = {};
    db.Sequelize = Sequelize;
    db.sequelize = sequelize;
    db.products = require("../models/products.model")(sequelize, DataTypes, Model);

    return db;

}

module.exports = {
    connect
}