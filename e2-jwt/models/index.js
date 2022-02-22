import { dbConfig } from '../config/dbConfig.js'

import { Sequelize, DataTypes } from 'sequelize'

import User from './User.js'

const sequelize = new Sequelize(
    dbConfig.DB_DATABASE,
    dbConfig.DB_USER,
    dbConfig.DB_PASSWORD,
    {
        host: dbConfig.DB_HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: 0,
        pool: dbConfig.pool,
        port: 3308
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
    users: User(sequelize, DataTypes),
}


db.sequelize.sync({ force: false })
    .then(() => {
        console.log('re-sync done')
    })


export default db