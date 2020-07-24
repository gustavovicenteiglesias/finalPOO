
import axios from "axios";


const urlProvincia="https://apis.datos.gob.ar/georef/api/provincias?campos=id,nombre";


const provincia= {};

 provincia.get = async () =>{
  const res = await axios.get(urlProvincia)
  .then(response => {return response.data})
  .catch(error =>{return error;})
  return res

}

provincia.list = async (id) =>{
  const res = await axios.get("https://apis.datos.gob.ar/georef/api/municipios?provincia="+
  			id+"&campos=id,nombre&max=200")
  .then(response => {return response.data})
  .catch(error =>{return error;})
  return res

}

export default provincia