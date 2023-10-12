// ARRAYS DE PRODUCTOS
const productos = [
    {
        nombre: 'Mate de madera',
        material: 'madera',
        stock: true,
        precio: 500,
    },
    {
        nombre: 'Termo de acero inoxidable',
        material: 'acero',
        stock: true,
        precio: 800,
    },
    {
        nombre: 'Bombilla de aluminio',
        material: 'aluminio',
        stock: false,
        precio: 100,
    }
];

const user = {
    user: "admin",
    password: "1234"
};

//FUNCTION PARA MOSTRAR PRODUCTOS
const mostrarProductos = () => {

    let mensaje = "\nProductos disponibles: \n";

    productos.map((producto) => {
        mensaje += `\n Nombre: ${producto.nombre} \n Material: ${producto.material} \n Precio: $${producto.precio} pesos ars. \n -------------------------------- \n`;
    });

    alert(mensaje);
}

//FUNCTION AGREGAR PRODUCTO
const agregarProducto = () => {

    const username = prompt('Ingrese nombre de usuario.');
    const password = prompt('Ingrese contraseña.');

    if (username === user.user && password === user.password) {
        alert('Bienvenido a Tu Mate Online');

        const obtenerNombre = () => {
            let nombre = prompt('Ingrese el nombre del producto, por favor.');
            if (nombre === '') {
                alert('El nombre no puede estar vacío.');
                return obtenerNombre()
            }
            return nombre;
        }

        const obtenerMaterial = () => {
            let material = prompt('Ingrese el material del producto, por favor.');
            if (material === '') {
                alert('El material no puede estar vacío.');
                return obtenerMaterial()
            }
            return material;
        }

        const obtenerPrecio = () => {
            let precio = prompt('Ingrese el precio del producto, por favor.');
            if (precio === '') {
                alert('El precio no puede estar vacío.');
                return obtenerPrecio()
            }

            precio = parseFloat(precio);

            if (isNaN(precio)) {
                alert('Por favor, ingrese un precio válido.');
                return obtenerPrecio();
            }

            return precio;
        }

        let nombre = obtenerNombre();
        let material = obtenerMaterial();
        let precio = obtenerPrecio();

        const nuevoProducto = {
            nombre: nombre,
            material: material,
            precio: precio,
        };

        productos.push(nuevoProducto);

        mostrarProductos();
    } else {
        alert('Usuario o contraseña incorrecto. Prueba de nuevo.');
    }
}

// MENU
const opcionesMenu = [
    { numero: "1", nombre: "Agregar producto", function: agregarProducto },
    { numero: "2", nombre: "Mostrar productos disponibles", function: mostrarProductos },
    { numero: "3", nombre: "Salir", function: null }
];

const menu = () => {
    let opciones = "";
    for (const option of opcionesMenu) {
        opciones += `${option.numero} - ${option.nombre}\n`;
    }

    const seleccionarOpcion = prompt(`Selecciona una opcion: \n ${opciones}`);

    const seleccion = opcionesMenu.find(opcion => opcion.numero === seleccionarOpcion);

    if (seleccion) {

        if (seleccion.function) {
            seleccion.function();
        } else {
            alert(`Seleccionaste: ${seleccion.nombre}`);
        }
        if (seleccion.numero !== "3") {
            menu();
        } else {
            alert('Gracias por visitar Tu Mate Online.');
        }
    } else {
        alert('Selecciona una opcion valida.');
        menu();
    }
}

menu();
