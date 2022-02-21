import dbConfig from '../config/dbConfig.js'

import { Sequelize, DataTypes } from 'sequelize'

import Product from './Product'
import Review from './Review'


const sequelize = new Sequelize(
    dbConfig.DB_DATABASE,
    dbConfig.DB_USER,
    dbConfig.DB_PASSWORD,
    {
        host: dbConfig.DB_HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false,
        pool: dbConfig.pool
    }
)


sequelize.authenticate()
    .then(() => {
        console.log('Connected to database ' + dbConfig.DB_DATABASE)
    }).catch((error) => {
        console.log('Error: ' + error)
    })


const db = {
    Sequelize: Sequelize,
    sequelize: sequelize,
    products: Product(sequelize, DataTypes),
    reviews: Review(sequelize, DataTypes)
}


db.sequelize.sync({ force: false })
    .then(() => {
        console.log('re-sync done')
    })


module.exports = db