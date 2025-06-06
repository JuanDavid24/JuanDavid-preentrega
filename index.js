import { fetchData } from "./productsService.js";

const args = process.argv.slice(2);
if (args.length < 2)
  console.error("No se ingresaron los parámetros suficientes");
else {
  const [method, path, ...productData] = args;

  const reqSettings = {
    GET: {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    },
    POST: {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: productData[0],
        price: productData[1],
        category: productData[2],
      }),
    },
    DELETE: {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    },
  };

  const config = reqSettings[method];

  if (!config) {
    console.error("Método ingresado no soportado");
    process.exit(1);
  }

  const data = await fetchData(`https://fakestoreapi.com/${path}`, config);

  if (data) console.log(data);
}
