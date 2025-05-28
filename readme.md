# Pre-entrega curso NodeJs TalentoTech
El programa consume la API de [FakeStore](https://fakestoreapi.com) en base a los argumentos ingresados por el usuario a través de la consola. Permite las siguientes operaciones.
### Consultar todos los productos
`npm run start GET products`

### Consultar un producto específico
`npm run start GET products/<productId>`
- Ejemplo: 
`npm run start GET products/15`

### Crear un producto nuevo
`npm run start POST products <title> <price> <category>`
- Ejemplo: 
`npm run start POST products T-Shirt-Rex 300 remeras`

### Eliminar un producto
`npm run start DELETE products/<productId>`
- Ejemplo: 
`npm run start DELETE products/7`