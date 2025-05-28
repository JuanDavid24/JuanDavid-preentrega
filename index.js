import { fetchData } from "./productsService.js";

const args = process.argv.slice(2);
if (args.length < 2)
  console.error("No se ingresaron los parámetros suficientes");
else {
  const [method, path, ...productData] = args;
  let config = {
    method,
    path,
    headers: { "Content-Type": "application/json" },
  };

  if (method === "POST" && productData) {
    config.body = JSON.stringify({
      title: productData[0],
      price: productData[1],
      category: productData[2],
    });
  }
  fetchData(`https://fakestoreapi.com/${path}`, config)
}