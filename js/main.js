//Ingreso (ciclo for)
let contraseña = "hola mundo";

function login() {
  let entrar = false;
  for (let i = 3; i > 0; i--) {
    let ingresoConExito = prompt("Por favor, ingrese su contraseña");
    if (ingresoConExito === contraseña) {
      login === contraseña;
      alert("Contraseña correcta");
      alert("Bienvenido a Frater Solis");
      entrar = true;
      break;
    } else {
      alert(
        "Contraseña incorrecta, le quedan " +
          i +
          " intentos.\nPor favor vuelva a intentarlo"
      );
    }
  }
  return entrar;
}

//Calculadora de compra de productos
function compra() {
  let fraseSaldo = "Su saldo es de:\n";
  let fraseCompra = "Gracias por su compra, su saldo es de:\n$";
  let fraseNoSaldo = "No tiene suficiente saldo";
  let fraseNoStock = "Lo sentimos, no poseemos stock del producto seleccionado";
  let monto = 300000;
  let stockCremaManos = 4;
  let stockCremaCuerpo = 10;
  let stockEsmalteBase = 8;
  let stockEsmalteTop = 12;
  let stockAguaMicelar = 9;
  let comprarProductos = prompt(
    "OPCIÓN A) Si desea conocer su saldo escriba: saldo\nOPCIÓN B) Si desea comprar un producto escriba el número correspondiente al mismo\n 1 - Crema de manos Neroli & Orquideas\n 2 - Crema de cuerpo Neroli & Orquideas\n 3 - Esmalte Base Coat\n 4 - Esmalte Top Coat\n 5 - Agua Micelar\nOPCIÓN C) Si quiere salir del menú escriba: salir"
  );
  while (comprarProductos != "salir" && comprarProductos != "Salir") {
    switch (comprarProductos) {
      case "saldo":
        alert(fraseSaldo + "$" + monto);
        break;
      case "Saldo":
        alert(fraseSaldo + "$" + monto);
        break;
      case "1":
        let cremaManos = 2000;
        stockCremaManos = stockCremaManos - 1;
        if (monto >= cremaManos && stockCremaManos > 0) {
          monto = monto - cremaManos;
          alert(fraseCompra + monto);
        } else if (monto < cremaManos) {
          alert(fraseNoSaldo);
        } else if (stockCremaManos <= 0) {
          alert(fraseNoStock);
        }
        break;
      case "2":
        let cremaCuerpo = 4500;
        stockCremaCuerpo = stockCremaCuerpo - 1;
        if (monto >= cremaCuerpo && stockCremaCuerpo > 0) {
          monto = monto - cremaCuerpo;
          alert(fraseCompra + monto);
        } else if (monto < cremaCuerpo) {
          alert(fraseNoSaldo);
        } else if (stockCremaCuerpo <= 0) {
          alert(fraseNoStock);
        }
        break;
      case "3":
        let esmalteBase = 1700;
        stockEsmalteBase = stockEsmalteBase - 1;
        if (monto >= esmalteBase) {
          monto = monto - esmalteBase;
          alert(fraseCompra + monto);
        } else if (monto < esmalteBase) {
          alert(fraseNoSaldo);
        } else if (stockEsmalteBase <= 0) {
          alert(fraseNoStock);
        }
        break;
      case "4":
        let esmalteTop = 1700;
        stockEsmalteTop = stockEsmalteTop - 1;
        if (monto >= esmalteTop) {
          monto = monto - esmalteTop;
          alert(fraseCompra + monto);
        } else if (monto < esmalteTop) {
          alert(fraseNoSaldo);
        } else if (stockEsmalteTop <= 0) {
          alert(fraseNoStock);
        }
        break;
      case "5":
        let aguaMicelar = 2300;
        stockAguaMicelar = stockAguaMicelar - 1;
        if (monto >= aguaMicelar) {
          monto = monto - aguaMicelar;
          alert(fraseCompra + monto);
        } else if (monto < aguaMicelar) {
          alert(fraseNoSaldo);
        } else if (stockAguaMicelar <= 0) {
          alert(fraseNoStock);
        }
        break;
      default:
        alert("Esa operacion no esta disponible");
        break;
    }
    comprarProductos = prompt(
      "OPCIÓN A) Si desea conocer su saldo escriba: saldo\nOPCIÓN B) Si desea comprar un producto escriba el número correspondiente al mismo\n 1 - Crema de manos Neroli & Orquideas\n 2 - Crema de cuerpo Neroli & Orquideas\n 3 - Esmalte Base Coat\n 4 - Esmalte Top Coat\n 5 - Agua Micelar\nOPCIÓN C) Si quiere salir del menú escriba: salir"
    );
  }
}

//Cambiar sus datos personales
function Datos(nombre, edad, correo) {
  this.nombre = nombre;
  this.edad = parseFloat(edad);
  this.correo = correo;
}

function opciones() {
  let cambiarDatos = prompt(
    "1) Si desea cambiar sus datos personales escriba: cambiar \n2) Si desea salir escriba: salir"
  );

  while (cambiarDatos != "salir" && cambiarDatos != "Salir") {
    switch (cambiarDatos) {
      case "cambiar":
        let nombres = prompt("Por favor, ingrese su nombre");
        let edad = prompt("Por favor, ingrese su edad");
        let correo = prompt("Por favor, ingrese su correo electrónico");
        const usuario1 = new Datos(nombres, edad, correo);
        const info = [];
        info.push(usuario1);
        for (const informacion of info) {
          alert(
            "Nombre: " +
              informacion.nombre +
              "\nEdad: " +
              informacion.edad +
              "\nCorreo: " +
              informacion.correo
          );
        }
        break;
      case "Cambiar":
        let nombresDos = prompt("Por favor, ingrese su nombre");
        let edadDos = prompt("Por favor, ingrese su edad");
        let correoDos = prompt("Por favor, ingrese su correo electrónico");
        let usuario2 = new Datos(nombresDos, edadDos, correoDos);
        info = [];
        info.push(usuario2);
        for (const informacion of info) {
          alert(
            "Nombre: " +
              informacion.nombre +
              "\nEdad: " +
              informacion.edad +
              "\nCorreo electrónico: " +
              informacion.correo
          );
        }
        break;
      default:
        alert("Esa operación no esta disponible");
        break;
    }
    cambiarDatos = prompt(
      "1) Si desea cambiar sus datos personales escriba: cambiar \n2) Si desea salir escriba: salir"
    );
  }
}

//Menu inicial
let ingresoExitoso = login();
if (ingresoExitoso) {
  let funciona = prompt(
    "¡Bienvenido a Frater Solis!\n¿En qué podemos ayudarlo hoy? Escriba debajo el número correspondiente\n1) Desea obtener información sobre nuestros productos.\n2) Desea comprar nuestros productos.\n3) Desea cambiar sus datos personales.\n4) Si desea salir del menú escriba: salir"
  );
  while (funciona != "salir" && funciona != "Salir") {
    switch (funciona) {
      case "1":
        const productos = [
          {
            producto: 1,
            nombre: "Crema de manos Neroli y Orquideas",
            descripcion:
              "Mantené la piel de tus manos nutrida, hidratada y fresca todo el día. La Manteca de Karité brindará antioxidantes superiores y beneficios extraordinarios para la piel de tus manos, mientras que la Vitamina E te aportará propiedades Humectantes y Regenerativas para tu piel. El Aceite de Macadamia le dará elasticidad y firmeza a tus manos y las dejará suaves y sedosas.",
            precio: 2000,
          },
          {
            producto: 2,
            nombre: "Crema de cuerpo Neroli y Orquideas",
            descripcion:
              "Mantené la piel de tu cuerpo nutrida, hidratada y fresca todo el día. La Manteca de Karité brindará antioxidantes superiores y beneficios extraordinarios para la piel de tu cuerpo, mientras que la Vitamina E te aportará propiedades Humectantes y Regenerativas para tu piel. El Aceite de Macadamia le dará elasticidad y firmeza a tu piel y las dejará suave y sedosa.",
            precio: 4500,
          },
          {
            producto: 3,
            nombre: "Esmalte Base Coat",
            descripcion:
              "Alisa y protege tus uñas con nuestro Base Coat. Este producto es transparente incoloro, no blanquecino como se ve en la imagen. Sus ingredientes que favorecen la adhesión ayudan al pulido en la superficie de tus uñas para que no se astillen y las protege de manchas y alteraciones de color. Extiende el tiempo de duración de los esmaltes,  seca rápido y además agregamos un pincel Plano y Fino 100% Vegan y personalizado para una aplicación más simple.",
            precio: 1700,
          },
          {
            producto: 4,
            nombre: "Esmalte Top Coat",
            descripcion:
              "Obtené un acabado superior y un aspecto con brillo en tus uñas. Otorgá mayor protección a tus colores. Extiende el tiempo de duración de los esmaltes,  seca rápido y además agregamos un pincel Big Brush Plano y fino 100% Vegan y personalizado para una aplicación más simple.",
            precio: 1700,
          },
          {
            producto: 5,
            nombre: "Agua Micelar",
            descripcion:
              "Limpia, desmaquilla, previene irritaciones y suaviza tu piel gracias a los extractos de Manzanilla, Malva y Caléndula. Nuestra Agua Micelar forma Micelas que retienen el maquillaje o impurezas creando una piel más limpia y fresca.",
            precio: 2300,
          },
        ];
        let prods = prompt(
          "Los productos disponibles son: \n- Crema de manos Neroli y Orquideas\n- Crema de cuerpo Neroli y Orquideas\n- Esmalte Base Coat\n- Esmalte Top Coat\n- Agua Micelar\nIngrese el nombre de uno de nuestros productos, y obtendrá información del mismo"
        );
        if (prods != "") {
          function filtrarProducto(arr, filtro) {
            const filtrado = arr.filter((productos) => {
              return productos.nombre.includes(filtro);
            });
            return filtrado;
          }
          let stringFilter = JSON.stringify(filtrarProducto(productos, prods));
          alert(stringFilter);
        } else if (prods == "") {
          alert("Debe escribir el nombre de un producto para continuar");
          prods = prompt(
            "Los productos disponibles son: \n- Crema de manos Neroli y Orquideas\n- Crema de cuerpo Neroli y Orquideas\n- Esmalte Base Coat\n- Esmalte Top Coat\n- Agua Micelar\nIngrese el nombre de uno de nuestros productos, y obtendrá información del mismo"
          );
        }
        break;
      case "2":
        compra();
        break;
      case "3":
        opciones();
        break;
      default:
        alert("No tenemos disponible ese producto por el momento");
        break;
    }
    funciona = prompt(
      "¡Bienvenido a Frater Solis!\n¿En qué podemos ayudarlo hoy? Escriba debajo el número correspondiente\n1) Desea obtener información sobre nuestros productos.\n2) Desea comprar nuestros productos.\n3) Desea cambiar sus datos personales."
    );
  }
} else {
  alert("demasiados intentos de inicio de sesión");
}
