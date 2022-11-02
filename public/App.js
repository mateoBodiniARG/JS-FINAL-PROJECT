class Product {
  constructor(name, price, year) {
    this.nombre = name;
    this.precio = price;
    this.year = year;
  }
}

class Interfaz {
  addProduct(product) {
    const listaDeProductos = document.getElementById('product-list');
    const elemento = document.createElement('div');
    elemento.innerHTML = `
      <div class= "card text-center mb-4">
          <div class = "card-body">
              <strong> Nombre del producto </strong>: ${product.nombre}
              <strong> Precio del producto </strong>: ${product.precio}
              <strong> Año del product </strong>: ${product.year}
              <a href="#" class ="btn btn-danger"> Eliminar </a>
          </div>
      </div>
    `;
    listaDeProductos.appendChild(elemento);
    this.resetearFormulario();
  }

  resetearFormulario() {
    document.getElementById("product-form").reset();
  }

  eliminarproduct() {}

  mostrarMensaje() {}
}

// Eventos DOM

document
  .getElementById("product-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const year = document.getElementById("year").value;

    console.log(name,price,year)

    const product = new Product(name, price, year);
    const interfazz = new Interfaz();

    interfazz.addProduct(product);

  
  });
