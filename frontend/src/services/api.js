const API_BASE_URL = "http://127.0.0.1:8000/api";

export async function obtenerProductos() {
  const respuesta = await fetch(`${API_BASE_URL}/productos/`);
  if (!respuesta.ok) {
    throw new Error(`Error HTTP: ${respuesta.status} al obtener los productos`);
  }
  return await respuesta.json();
}

export async function obtenerCategorias() {
  const respuesta = await fetch(`${API_BASE_URL}/categorias/`);
  if (!respuesta.ok) {
    throw new Error(`Error HTTP: ${respuesta.status} al obtener las categorías`);
  }
  return await respuesta.json();
}