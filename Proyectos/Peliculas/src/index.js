import cargarTitulos from "./cargarTitulos";
import fetchPopulares from "./fetchPopulares";

const cargar = async () =>{
   const results = await fetchPopulares()
   cargarTitulos(results);
}

cargar()
