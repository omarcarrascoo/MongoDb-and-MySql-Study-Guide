const socket = io.connect()

const addProduct = (e) => {
    const title = document.querySelector('#title').value
    const priceString = document.querySelector('#price').value
    const img = document.querySelector('#img').value
    price = parseInt(priceString)
    socket.emit('new-product', {title, price, img})
    return false;
}

socket.on('productos', (data) =>{
    console.log( data)
})
