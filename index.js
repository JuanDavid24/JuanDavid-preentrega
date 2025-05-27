console.log(process.argv); 

const args = process.argv.slice(2);
if (args.length < 2) 
    console.error("No se ingresaron los parámetros suficientes");
else {
    const [ method, ...params ] = args;
    console.log(`Método: ${method}`);
    console.log(`Parámetros: ${params.join(", ")}`);
}

