window.onload = function() {
    // Variables
    const baseDeDatos = [{
            id: 1,
            nombre: 'Computador ALL & ONE HP',
            des: 'AMD A4 4 GB 1 TB',
            val: '4.8',
            precio: 2158000,
            imagen: 'images/AIO.png'
        }, {
            id: 2,
            nombre: 'Computador ALL & ONE LENOVO',
            des: 'AMD A4 4 GB 1 TB',
            val: '4.2',
            precio: 1850500,
            imagen: 'images/AIO.png'
        }, {
            id: 3,
            nombre: 'Computador ALL & ONE ASUS',
            des: 'AMD A4 4 GB 1 TB',
            val: '4',
            precio: 2158000,
            imagen: 'images/AIO.png'
        }, {
            id: 4,
            nombre: 'Computador ALL & ONE ACER',
            des: 'AMD A4 4 GB 1 TB',
            val: '4.5',
            precio: 3522200,
            imagen: src = 'images/AIO.png'
        },{
            id: 5,
            nombre: 'Computador ALL & ONE ACER',
            des: 'AMD A4 4 GB 1 TB',
            val: '4.5',
            precio: 3522200,
            imagen: src = 'images/AIO.png'
        },{
            id: 6,
            nombre: 'Computador ALL & ONE ACER',
            des: 'AMD A4 4 GB 1 TB',
            val: '4.5',
            precio: 3522200,
            imagen: src = 'images/AIO.png'
        },{
            id: 7,
            nombre: 'Computador ALL & ONE ACER',
            des: 'AMD A4 4 GB 1 TB',
            val: '4.5',
            precio: 3522200,
            imagen: src = 'images/AIO.png'
        },{
            id: 8,
            nombre: 'Computador ALL & ONE ACER',
            des: 'AMD A4 4 GB 1 TB',
            val: '4.5',
            precio: 3522200,
            imagen: src = 'images/AIO.png'
        },{
            id: 9,
            nombre: 'Computador ALL & ONE ACER',
            des: 'AMD A4 4 GB 1 TB',
            val: '4.5',
            precio: 3522200,
            imagen: src = 'images/AIO.png'
        },{
            id: 10,
            nombre: 'Computador ALL & ONE ACER',
            des: 'AMD A4 4 GB 1 TB',
            val: '4.5',
            precio: 3522200,
            imagen: src = 'images/AIO.png'
        },{
            id: 11,
            nombre: 'Computador ALL & ONE ACER',
            des: 'AMD A4 4 GB 1 TB',
            val: '4.5',
            precio: 3522200,
            imagen: src = 'images/AIO.png'
        }
        

    ];

    let carrito = [];
    let total = 0;
    const DOMitems = document.querySelector('#items');
    const DOMcarrito = document.querySelector('#carrito');
    const DOMtotal = document.querySelector('#total');
    const DOMbotonVaciar = document.querySelector('#boton-vaciar');
    const miLocalStorage = window.localStorage;

    // Funciones

    
    // Dibuja todos los productos a partir de la base de datos. No confundir con el carrito
    
    function renderizarProductos() {
        baseDeDatos.forEach((info) => {
            // Estructura
            const miNodo = document.createElement('div');
            miNodo.classList.add('card', 'col-sm-4');
            // Body
            const miNodoCardBody = document.createElement('div');
            miNodoCardBody.classList.add('card-body');
            // Titulo
            const miNodoTitle = document.createElement('h5');
            miNodoTitle.classList.add('card-title');
            miNodoTitle.textContent = info.nombre;
            // Imagen
            const miNodoImagen = document.createElement('img');
            miNodoImagen.classList.add('img-fluid');
            miNodoImagen.setAttribute('src', info.imagen);
            // Precio
            const miNodoVa = document.createElement('i');
            miNodoVa.classList.add('card-text');
            miNodoVa.textContent = 'valoración ' + info.val;
            //Precio2
            const miNodoPrecio = document.createElement('p');
            miNodoPrecio.classList.add('card-text');
            miNodoPrecio.textContent = '$ ' + info.precio;

            const miNodoDes = document.createElement('p');
            miNodoDes.classList.add('card-text');
            miNodoDes.textContent = info.des;
            // Boton 
            const miNodoBoton = document.createElement('button');
            miNodoBoton.classList.add('btn', 'btn-primary');
            miNodoBoton.textContent = '+';
            miNodoBoton.setAttribute('marcador', info.id);
            miNodoBoton.addEventListener('click', agregaralCarrito);
            // Insertamos
            miNodoCardBody.appendChild(miNodoImagen);
            miNodoCardBody.appendChild(miNodoTitle);
            miNodoCardBody.appendChild(miNodoDes);
            miNodoCardBody.appendChild(miNodoVa);
            miNodoCardBody.appendChild(miNodoPrecio);
            miNodoCardBody.appendChild(miNodoBoton);
            miNodo.appendChild(miNodoCardBody);
            DOMitems.appendChild(miNodo);
        });
    }

    // Evento para añadir un producto al carrito de la compra
     
    function agregaralCarrito(evento) {
        // agregamos a nuestro carrito
        carrito.push(evento.target.getAttribute('marcador'))
        // Calculo el total
        calcularTotal();
        // Actualizamos el carrito 
        renderizarCarrito();
        // Actualizamos el LocalStorage
        guardarCarritoEnLocalStorage();
    }

    
    // Dibuja todos los productos guardados en el carrito
     
    function renderizarCarrito() {
        // Vaciamos todo el html
        DOMcarrito.textContent = '';
        // Quitamos los duplicados
        const carritoSinDuplicados = [...new Set(carrito)];
        // Generamos los Nodos a partir de carrito
        carritoSinDuplicados.forEach((item) => {
            // Obtenemos el item que necesitamos de la variable base de datos
            const miItem = baseDeDatos.filter((itemBaseDatos) => {
                // ¿Coincide las id? Solo puede existir un caso
                return itemBaseDatos.id === parseInt(item);
            });
            // Cuenta el número de veces que se repite el producto
            const numeroUnidadesItem = carrito.reduce((total, itemId) => {
                // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
                return itemId === item ? total += 1 : total;
            }, 0);
            // Creamos el nodo del item del carrito
            const miNodo = document.createElement('li');
            miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
            miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}`;
            // Boton de borrar
            const miBoton = document.createElement('button');
            miBoton.classList.add('btn', 'btn-danger', 'mx-5');
            miBoton.textContent = 'X';
            miBoton.style.marginLeft = '1rem';
            miBoton.dataset.item = item;
            miBoton.addEventListener('click', borrarItemCarrito);
            // Mezclamos nodos
            miNodo.appendChild(miBoton);
            DOMcarrito.appendChild(miNodo);
        });
    }

    
     // Evento para borrar un elemento del carrito
     
    function borrarItemCarrito(evento) {
        // Obtenemos el producto ID que hay en el boton pulsado
        const id = evento.target.dataset.item;
        // Borramos todos los productos
        carrito = carrito.filter((carritoId) => {
            return carritoId !== id;
        });
        // volvemos a renderizar
        renderizarCarrito();
        // Calculamos de nuevo el precio
        calcularTotal();
        // Actualizamos el LocalStorage
        guardarCarritoEnLocalStorage();

    }

    // Calcula el precio total teniendo en cuenta los productos repetidos
     
    function calcularTotal() {
        // Limpiamos precio anterior
        total = 0;
        // Recorremos el array del carrito
        carrito.forEach((item) => {
            // De cada elemento obtenemos su precio
            const miItem = baseDeDatos.filter((itemBaseDatos) => {
                return itemBaseDatos.id === parseInt(item);
            });
            total = total + miItem[0].precio;
        });
        // Renderizamos el precio en el HTML
        DOMtotal.textContent = total.toFixed(2);
    }

    // Varia el carrito y vuelve a dibujarlo
     
    function vaciarCarrito() {
        // Limpiamos los productos guardados
        carrito = [];
        // Renderizamos los cambios
        renderizarCarrito();
        calcularTotal();
        // Borra LocalStorage
        localStorage.clear();

    }

    function guardarCarritoEnLocalStorage() {
        miLocalStorage.setItem('carrito', JSON.stringify(carrito));
    }

    function cargarCarritoDeLocalStorage() {
        // ¿Existe un carrito previo guardado en LocalStorage?
        if (miLocalStorage.getItem('carrito') !== null) {
            // Carga la información
            carrito = JSON.parse(miLocalStorage.getItem('carrito'));
        }
    }

    // Eventos
    DOMbotonVaciar.addEventListener('click', vaciarCarrito);

    // Inicio
    cargarCarritoDeLocalStorage();
    renderizarProductos();
    calcularTotal();
    renderizarCarrito();
}