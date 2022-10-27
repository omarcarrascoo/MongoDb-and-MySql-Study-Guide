const express = require('express')
const {Server: HttpServer} = require('http')
const {Server: IOServer} = require('socket.io')
const {option} = require('./config')
const knex = require('knex')(option.mysql)

const app = express()
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

app.use(express.static('public'))

httpServer.listen(8080, () =>{
    console.log('Servidor listado en el pueto 8080')
})
const pruebaProductos=[]
const products = ()=>{
    knex('productos').select('*')
    .then((data)=>{
        pruebaProductos = data
    })
    .catch((error)=>{
        console.log(error);
    })
    .finally(()=>{
        knex.destroy()
    })
}

io.on('connection', (cliente)=>{
    
    cliente.emit('productos', products)
    cliente.on('new-product', producto =>{
        addProduct(producto) 
    })
    
})

// CONSULTAS A BD
// knex.schema.createTable('productos', table=>{
//     table.increments('id')
//     table.string('title')
//     table.integer('price')
//     table.string('img')
// })
const addProduct = (data) =>{
    knex('productos').insert(data)
    .then(()=>{
        console.log('Producto añadido con exito');
    })
    .catch((err)=>{
        console.log(err);
    })
    .finally(()=>{
        knex.destroy()
    })
}
