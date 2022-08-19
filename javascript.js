
const carrito=[];
const producto={
Nombre: "Bowl vidrio",Precio: 3600, Imagen:./imagenes/bazar1.jpg", cantidad:1; 
Nombre:"Tabla",Precio:1500, "./imagenes/bazar2.jpg", cantidad:1,
Nombre:"Bowl base color", Precio:3500, Imagen:"./imagenes/bazar3.jpg", cantidad:1,
Nombre:"Molde Helado colores", Precio:2500, Imagen:"./imagenes/held1.jpg",cantidad:1,
Nombre:"Molde Helado ", Precio:2500, Imagen:"./imagenes/held2.jpg", cantidad:1,
Nombre:"Organizador pastel", Precio:4500, Imagen:"./Imagen: imagenes/organizadores1.jpg",cantidad:1,
Nombre:"Organizador marron", Precio:3500,Imagen: "./Imagen: imagenes/organizadores2.jpg", cantidad:1,
}

let tarjetas=document.getElementById("productos");
tarjetas.innerHTML=`
    <div class="card" style="width: 18rem;">
    <img src=${producto.imagen} class="card-img-top" alt="producto">
    <div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">$ ${producto.precio}</p>
        <p class="card-text">$ ${producto.cantidad}</p>
        <button id="miBoton" class="btn btn-primary">Comprar</button>
    </div>
    </div>
`;
let miBoton=document.getElementById("miBoton");

miBoton.onclick = () => {
    console.log(" Agregado alcarrito");}



    class carrito{
      constructor(nombre,precio,unidades){
          this.nombre=nombre;
          this.precio=precio;
          this.unidades=unidades;
      }
  }
  
  const productos = [];
  
  let producto = prompt ("Ingresa el producto \nbowls\nsets bowls x 6 unidades\n\nmoldes de helado\n\nset cubiertos\n\norganizadores/n (comprar para finalizar");
  let precio=0;
  
  while(producto!="comprar"){
          switch(producto){
              case "bowls":
                  productos.push(new carrito(bowls,1005,1));
                  console.log("Por unidad $1005");
                  precio=precio+1005;
                  break;
              case "sets bowls":
                  productos.push(new carrito(setsbowls,5729,1));
                  console.log(" Set por 6 unidades $5729");
                  precio=precio+5729;
                  break;
              case "moldes de helado":
                  productos.push(new carrito(moldesdehelado,1500,1));
                  console.log("moldes de helado $1500");
                  precio=precio+1500;
                  break;
              case "set cubiertos":
                  productos.push(new carrito(setcubiertos,2455,1));
                  console.log("set cubiertos $2455");
                  precio=precio+2455;
                      break;
              case "organizadores":
                  productos.push(new carrito(organizadores,3544,1));
                  console.log("organizadores $3544");
                  precio=precio+3544;
                  break;
              default:
                  console.log("Sin stock");
                  break;
          }
          producto=prompt("Agrega al carrito (comprar para finalizar)");
      }
      
      console.log("Total a pagar $"+precio);