const socket = io.connect()

const addProduct = (e) => {
    const title = document.querySelector('#title').value
    const priceString = document.querySelector('#price').value
    const img = document.querySelector('#img').value
    price = parseInt(priceString)
    socket.emit('new-product', {title, price, img})
    return false;
}

const render = (productos) => {
    const html = productos.map((elem, index) => {
        return (
            `<div>
                <strong>${elem.title}</strong>
                <em>${elem.price}</em>
            </div>`

        )
    }).join(" ");
    document.getElementById('productList').innerHTML = html;
}

socket.on('productos', (data) =>{
    console.log( data)
    render(data)
})
