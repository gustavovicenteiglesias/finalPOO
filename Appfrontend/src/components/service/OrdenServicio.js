import axios from "axios";


var URLactual = window.location.host;
const baseUrl ="http://"+URLactual+"/api/abono/" 


const abono = {};


abono.delete = async (id) => {
  const urlDelete = baseUrl+"/delete/"+id
  const res = await axios.delete(urlDelete)
  .then(response=> { return response.data })
  .catch(error =>{ return error })
  return res;
}


abono.update = async (state) => {

  const datapost = {
    
          
    
       
        marca: state.marca,
        modelo: state.modelo,
        potencia: state.potencia,
        motorMarca: state.motorMarca,
        motorModelo: state.motorModelo,
        motorNumero: state.motorNumero,
        fechaAnterior: state.fechaAnterior,
        fechaActual: state.fechaActual,
        horometroActual: state.horometroActual,
        horometroAnterior: state.horometroAnterior,
        cabinaAcustica: state.cabinaAcustica,
        cabinaPintura: state.cabinaPintura,
        cabinaCerradura: state.cabinaCerradura,
        enfriamientoManguera: state.enfriamientoManguera,
        enfriamientoPerdidas: state.enfriamientoPerdidas,
        enfriamientoNivel: state.enfriamientoNivel,
        bateriaCantidad: state.bateriaCantidad,
        bateriaAcido: state.bateriaAcido,
        bateriaConexion: state.bateriaConexion,
        bateriaMarca: state.bateriaMarca,
        bateriaEstado: state.bateriaEstado,
        bateriaBornes: state.bateriaBornes,
        tensionParado: state.tensionParado,
        tensionMarcha: state.tensionMarcha,
        tensionArranque: state.tensionArranque,
        fechaInstalacion: state.fechaInstalacion,
        perdidaCombustible: state.perdidaCombustible,
        perdidaAceite: state.perdidaAceite,
        perdidaAgua: state.perdidaAgua,
        estadoMangueras: state.estadoMangueras,
        estadoFiltroAire: state.estadoFiltroAire,
        estadoRodantes: state.estadoRodantes,
        nivelAceite: state.nivelAceite,
        nivelCombustible: state.nivelCombustible,
        presionAceite: state.presionAceite,
        tensionRs: state.tensionRs,
        tensionSt: state.tensionSt,
        tensionRt: state.tensionRt,
        tensionRn: state.tensionRn,
        tensionSn: state.tensionSn,
        tensionTn: state.tensionTn,
        autMan: state.autMan,
        observaciones: state.observaciones,
        idFirma: state.idFirma,
        idEmpresa:state.idEmpresa,
        idTecnico:state.idTecnico

  }

  const urlUpdate = baseUrl+"/update/"+state.id

  const res = await axios.put(urlUpdate,datapost)
  .then(response=>{ return response.data })
  .catch(error=>{ return error.response })

  return res;
}

abono.get = async (id) => {
  const urlGet = baseUrl+"find/"+id
  const res = await axios.get(urlGet)
  .then(response=> {return response.data })
  .catch(error=>{ return error; })
  return res;
}



abono.list = async () => {
  const urlList = baseUrl+"/all"
  const res = await axios.get(urlList)
  .then(response=> {return response.data })
  .catch(error=>{ return error; })
  return res;
}

abono.create = async (state) => {

	const datapost = {
        marca: state.marca,
        modelo: state.modelo,
        potencia: state.potencia,
        motorMarca: state.motorMarca,
        motorModelo: state.motorModelo,
        motorNumero: state.motorNumero,
        fechaAnterior: state.fechaAnterior,
        fechaActual: state.fechaActual,
        horometroActual: state.horometroActual,
        horometroAnterior: state.horometroAnterior,
        cabinaAcustica: state.cabinaAcustica,
        cabinaPintura: state.cabinaPintura,
        cabinaCerradura: state.cabinaCerradura,
        enfriamientoManguera: state.enfriamientoManguera,
        enfriamientoPerdidas: state.enfriamientoPerdidas,
        enfriamientoNivel: state.enfriamientoNivel,
        bateriaCantidad: state.bateriaCantidad,
        bateriaAcido: state.bateriaAcido,
        bateriaConexion: state.bateriaConexion,
        bateriaMarca: state.bateriaMarca,
        bateriaEstado: state.bateriaEstado,
        bateriaBornes: state.bateriaBornes,
        tensionParado: state.tensionParado,
        tensionMarcha: state.tensionMarcha,
        tensionArranque: state.tensionArranque,
        fechaInstalacion: state.fechaInstalacion,
        perdidaCombustible: state.perdidaCombustible,
        perdidaAceite: state.perdidaAceite,
        perdidaAgua: state.perdidaAgua,
        estadoMangueras: state.estadoMangueras,
        estadoFiltroAire: state.estadoFiltroAire,
        estadoRodantes: state.estadoRodantes,
        nivelAceite: state.nivelAceite,
        nivelCombustible: state.nivelCombustible,
        presionAceite: state.presionAceite,
        tensionRs: state.tensionRs,
        tensionSt: state.tensionSt,
        tensionRt: state.tensionRt,
        tensionRn: state.tensionRn,
        tensionSn: state.tensionSn,
        tensionTn: state.tensionTn,
        autMan: state.autMan,
        observaciones: state.observaciones,
        idFirma: state.idFirma,
        idEmpresa:state.idEmpresa,
        idTecnico:state.idTecnico

  }

	const urlPost = baseUrl+"/create"
  
  console.log(datapost)
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

export default abono