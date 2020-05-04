const restaurApp = {};


restaurApp.platillos = [
    {
        platillo: 'Pizza',
        precio: 25,

    },
    {
        platillo: 'Hamburguesa',
        precio: 20,

    },
    {
        platillo: 'Hot-dog',
        precio: 15,

    },

];

// Funciones
restaurApp.funciones = {
    ordenar: (id) => {
        console.log(
            `
            Tu Platillo: ${restaurApp.platillos[id].platillo} se esta Preparando
            
            `
        )
    },
    agregarPlatillo: (platillo,precio) => {
        const nuevo = {
            platillo,
            precio
        }
        restaurApp.platillos.push(nuevo)
    },
    mostarMenu: platillos =>{
        console.log(`Bienvenido a nuestro menú:`);
        platillos.forEach((platillo,index) => {
            console.log(` ${index} : ${platillo.platillo} y su precio es de $ ${platillo.precio}`)
        });
    }
}

// console.log(restaurApp);
// console.log(restaurApp.funciones.ordenar(2));
console.log(restaurApp)

restaurApp.funciones.mostarMenu(restaurApp.platillos)
restaurApp.funciones.ordenar(0)
restaurApp.funciones.agregarPlatillo('Pastel',15)
restaurApp.funciones.mostarMenu(restaurApp.platillos)