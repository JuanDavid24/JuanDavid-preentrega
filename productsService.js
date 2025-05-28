export const fetchData = async(URL, config) => {
  try {
    const res = await fetch(URL, config)
    const data = await res.json() 
    console.log(data);
  } catch (error) {
    console.error("No se pudo realizar la operación", error)
  }
}