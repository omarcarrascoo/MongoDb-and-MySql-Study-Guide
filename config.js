const option = {
    mysql:{
        client: 'mysql',
        connection: {
            host: '127.0.0.1',
            user: 'root',
            psw: '',
            database: 'ecommerce'
        }
    },
    sqlite: {
        client: 'sqlite3',
        connection: {
            filename: './db/ecommerce.sqlite'
        },
        useNullAsDefault: 'null'
    }
}
module.exports = {option}