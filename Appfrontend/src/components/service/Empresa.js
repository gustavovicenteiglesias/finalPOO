import axios from "axios";
var URLactual = window.location.host;
const baseUrl = "http://localhost:8080/api/empresa/"

//comentario

const empresa = {};


empresa.delete = async (id) => {
  const urlDelete = baseUrl+"/delete/"+id
  const res = await axios.delete(urlDelete)
  .then(response=> { return response.data })
  .catch(error =>{ return error })
  return res;
}


empresa.update = async (state) => {

  const datapost = {
    
          nombre:state.nombre,
          cuit:state.cuit,
          contacto:state.contacto,
          calle:state.calle,
          numero:state.numero,
          localidad:state.localidad,
          provincia:state.provincia,
          telefono:state.telefono,
          email:state.email
  }

  const urlUpdate = baseUrl+"/update/"+state.idEmpresa

  const res = await axios.put(urlUpdate,datapost)
  .then(response=>{ return response.data })
  .catch(error=>{ return error.response })

  return res;
}

empresa.get = async (id) => {
  const urlGet = baseUrl+"find/"+id
  const res = await axios.get(urlGet)
  .then(response=> {return response.data })
  .catch(error=>{ return error; })
  return res;
}



empresa.list = async () => {
  const urlList = baseUrl+"/all"
  const res = await axios.get(urlList)
  .then(response=> {return response.data })
  .catch(error=>{ return error; })
  return res;
}

empresa.create = async (state) => {

	const datapost = {
		      nombre:state.nombre,
          cuit:state.cuit,
          contacto:state.contacto,
          calle:state.calle,
          numero:state.numero,
          localidad:state.localidad,
          provincia:state.provincia,
          telefono:state.telefono,
          email:state.email
	}

	const urlPost = baseUrl+"/create"

	const res = await axios.post(urlPost,datapost)
	.then(response=>{
		const data = { success: true, message: response.data }
		return data;
	})
	.catch(error=>{
		const data = { success: false, message: error.response.data }
		return data;
	})

	return res;
}

export default empresa