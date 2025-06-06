export const fetchData = async(URL, config) => {
  try {
    const res = await fetch(URL, config)
    if (!res.ok) {
      throw new Error(`El servicio respondio con código de error: ${res.status}`);
    }
    const data = await res.json() 
    return data
  } catch (error) {
    console.error("No se pudo realizar la operación", error)
  }
}