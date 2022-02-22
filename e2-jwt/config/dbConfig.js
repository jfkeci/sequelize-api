export const dbConfig = {
    DB_HOST: '127.0.0.1',
    DB_USER: 'root',
    DB_PASSWORD: '',
    DB_DATABASE: 'geomain',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}