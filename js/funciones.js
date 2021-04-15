const botones = Compulaguito.querySelectorAll(".funciones.js")



botones.forEach((boton)=>{

    boton.addEventListener("click", (event)=>{
        event.preventDefault()

        const tarjeta = event.target.parentElement
        const nombre = tarjeta.querySelector("div h2").textContent
        const imagen = tarjeta.querySelector("div img").src
        const precio = tarjeta.querySelector("div span").textContent
        const cantidad = 1
        console.log('nombre: ${nombre} ,  precio: ${precio} , imagen:${imagen}')

        const tabla = document.querySelector("#tabla-carrito")
        tabla.innerHTML + ' <tr><td>${nombre}</td></tr>'

    })

})
