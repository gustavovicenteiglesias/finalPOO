import React from "react";
import Busqueda from "../components/Navbars/Busqueda";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
  Button, 
  Modal,
  ModalBody,
  ModalFooter,
  
} from "reactstrap";
import tecnicoServices from "../components/service/Tecnico"
import Provincia from "../components/service/Provincia";

class TablaTecnico extends React.Component {
    constructor(props)
  {
    super(props)
    this.handleProvinciaChange=this.handleProvinciaChange.bind(this);
    this.handleLocalidadChange=this.handleLocalidadChange.bind(this);
    this.setModalEditar=this.setModalEditar.bind(this);
    this.setTecnico=this.setTecnico.bind(this);
    this.setIdDelete=this.setIdDelete.bind(this);
    this.valorSearchEmpresa=this.valorSearchEmpresa.bind(this);
    this.setModalCrear=this.setModalCrear.bind(this);
    this.state = {
      listTecnico:[],
      listBusquedaTecnico:[],
          idTecnico:'',
          nombre:'',
          apellido:'',
          cuil:'',
          calle:'',
          numero:'',
          localidad:'',
          provincia:'',
          telefono:'',
          email:'',
          legajo:'',
          it:'',
          idt:'',
          busqueda:'',
      modalEditar:false,
      modalEliminar:false,
      editarModal:true,
      modalCrear:false
    }
    
  }
    
    handleLocalidadChange(localidad){
    console.log(localidad);
     this.setState((state) => {
    
    return {localidad:localidad}
    
  })
  }
  handleProvinciaChange(provincia) {
    console.log(provincia);
    this.setState((state) => {
    
    return {provincia:provincia}
    
  })}

    setTecnico(elemento,caso){
      if (caso == 'Editar'){
                this.setState({editarModal:false})
            }else{
                this.setState({editarModal:true})
            }
    
    this.setState((state) => ({
      
      idTecnico:elemento.idTecnico,
          nombre:elemento.nombre,
          apellido:elemento.apellido,
          cuil:elemento.cuil,
          calle:elemento.calle,
          numero:elemento.numero,
          localidad:elemento.localidad,
          provincia:elemento.provincia,
          telefono:elemento.telefono,
          email:elemento.email,
          legajo:elemento.legajo,
          modalEditar:true,
          
          
    }))
     
         
 }

 setModalCrear(){
    this.setState({
      idTecnico:'',
          nombre:'',
          apellido:'',
          cuil:'',
          calle:'',
          numero:'',
          localidad:'',
          provincia:'',
          telefono:'',
          email:'',
          legajo:'',
      modalCrear:!this.state.modalCrear});

   }
  setModalEliminar(){
    this.setState({modalEliminar:!this.state.modalEliminar})
  }

  setIdDelete(i,id){
      this.setState({
        it:i,
        idt:id,
        modalEliminar:true
      })
  }

  async resetLista(){

    const res = await tecnicoServices.list()
    console.log(res);
    if (res.success) {
       this.setState({listTecnico:res.list})
       this.filtrarElementos();
    }
    else {
      alert("Error server ==>"+JSON.stringify(res))
    }

  }
  async onClickSave()
  {
    const res = await tecnicoServices.create(this.state)
    if (res.success) {
      alert(res.message)
      this.setState({modalCrear:false});
    }
    else {
      alert("Error ==>"+res.message.message)
      this.setState({modalCrear:false});
    }
    this.resetLista();
      this.filtrarElementos();
  }


    async onClickUpdate()
  { 
    console.log("Execute update");
    console.log(this.state.idTecnico);
    const res = await tecnicoServices.update(this.state)
    if (res.success) {
      alert(res.message)
     
     this.setState({modalEditar:false});
     this.resetLista();
      this.filtrarElementos();
    }
    else {
      console.log("Error");
      console.log(res);
      alert("Error ==>"+JSON.stringify(res.data))
      this.setState({modalEditar:false});
    }

  }


  async onClickDelete()
  {
    const id=this.state.idt;
    const i=this.state.it;
    var yes = true;
    console.log(id,i);
    if (yes === true){ 
      
      const res = await tecnicoServices.delete(id)

      if (res.success) {
        this.resetLista();
        const list =this.state.listBusquedaTecnico
        list.splice(i,1)
         this.setState((state)=>({listBusquedaTecnico:list,
                      modalEliminar:false
        }))
      }
      else{
        console.log(res); alert(JSON.stringify(res))
      } 
    }
  }

  setModalEditar(){

    this.setState({
        modalEditar:!this.state.modalEditar
    })
  };
  
 async valorSearchEmpresa(emp){
  console.log(emp)
  await this.setState({
    busqueda:emp
  })
  this.filtrarElementos();
 }

 filtrarElementos=()=>{
  const lista=this.state.listTecnico;
  var search=lista.filter(item=>{
    if(item.idTecnico.toString().includes(this.state.busqueda)||
       item.nombre.toLowerCase().includes(this.state.busqueda)||
       item.nombre.includes(this.state.busqueda))
  
            {
              return item
            }
  })
    console.log(search)
    this.setState({listBusquedaTecnico:search})
 }
  async componentDidMount(){

   this.setState({listBusquedaTecnico:this.state.listTecnico});
    console.log("Mounted List");
    const res = await tecnicoServices.list()
    console.log(res);
    if (res.success) {
      this.setState({listTecnico:res.list})
    }
    else {
      alert("Error server ==>"+JSON.stringify(res))
    }

    this.setState({listBusquedaTecnico:this.state.listTecnico});
  }



  render() {

          const editarModal=this.state.editarModal;
          
    return (
      
      
      <>
          
        
          
        <div className="content">
        
          <Row>
            <Col md="12">
           <div class="row ">
                    <div class="form-group col-md-6 ">
            <Busqueda searchBusqueda={this.valorSearchEmpresa}/>
                    </div>
           <div class="form-group col-md-6 pl-5 ">
            <Button color="success"  onClick={this.setModalCrear}  size="lg">Nuevo</Button>
            </div>
            </div>
                    
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Tabla Tecnico</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Legajo</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        
                      </tr>
                    </thead>
                    <tbody>
                      {
              this.state.listBusquedaTecnico.map((data,i)=>{
                return(
                  <tr>
                    <td scope="row">{data.legajo}</td>
                    <td>{data.nombre}</td>
                    <td>{data.apellido}</td>
                    
                    <td>
                           <Button className="btn-icon" color="info" size="sm" 
                           onClick={()=>{this.setTecnico(data,'Ver')}}
                        href="#">
                          <i className="fas fa-eye" />
                          </Button>{` `}
                           
                         <Button href="#"  className="btn-icon" color="success" size="sm"
                          onClick={()=>{this.setTecnico(data,'Editar')}}>
                          <i className="fas fa-pencil-alt"></i>
                         </Button>{` `}

                          <Button className="btn-icon" color="danger" size="sm" onClick={()=>this.setIdDelete(i,data.idTecnico)}
                        href="#">
                          <i className="fas fa-trash-alt" />
                          </Button>
                      
                    </td>
                  </tr>
                )
              })
            }
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
            
          </Row>
       
          </div>


          <Modal isOpen={this.state.modalEditar} toggle={this.setModalEditar}>
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                   Tecnico
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-hidden="true"
                    onClick={this.setModalEditar}
                  >
                    <i className="tim-icons icon-simple-remove" />
                  </button>
                </div>
                <ModalBody >
                     <label>Nombre</label>
                      <input
                        className="form-control bg-white text-dark"
                        readOnly={editarModal}
                        type="text"
                        name="nombre"
                        value={this.state.nombre}
                        onChange={(value)=>this.setState({nombre:value.target.value})}
                      /> 
                      <label>Apellido</label>
                      <input
                        className="form-control bg-white text-dark"
                        readOnly={editarModal}
                        type="text"
                        name="apellido"
                        value={this.state.apellido}
                        onChange={(value)=>this.setState({apellido:value.target.value})}
                      /> 
                      <label>CUIL</label>
                      <input
                        className="form-control bg-white text-dark"
                        readOnly={editarModal}
                        type="text"
                        name="cuil"
                        value={this.state.cuil}
                        onChange={(value)=>this.setState({cuil:value.target.value})}
                      /> 

                      <label>Legajo</label>
                      <input
                        className="form-control bg-white text-dark"
                        readOnly={editarModal}
                        type="number"
                        name="legajo"
                        value={this.state.legajo}
                        onChange={(value)=>this.setState({legajo:value.target.value})}
                      /> 
                      <label>Calle</label>
                      <input
                        className="form-control bg-white text-dark"
                        readOnly={editarModal}
                        type="text"
                        name="calle"
                        value={this.state.calle}
                        onChange={(value)=>this.setState({calle:value.target.value})}
                      /> 
                      <label>Numero</label>
                      <input
                        className="form-control bg-white text-dark"
                        readOnly={editarModal}
                        type="number"
                        name="numero"
                        value={this.state.numero}
                        onChange={(value)=>this.setState({numero:value.target.value})}
                      /> 
                       
                      <Provincia valorprovincia={this.handleProvinciaChange}
                          primerdato={this.state.provincia}
                          valorlocalidad={this.handleLocalidadChange}
                          primeraLocalidad={this.state.localidad}
                          soloLectura={editarModal}
                        />
                     
                      <label>Telefono</label>
                      <input
                        className="form-control bg-white text-dark"
                        readOnly={editarModal}
                        type="number"
                        name="id"
                        value={this.state.telefono}
                         onChange={(value)=>this.setState({telefono:value.target.value})}
                      /> 
                      <label>Email</label>
                      <input
                        className="form-control bg-white text-dark"
                        readOnly={editarModal}
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={(value)=>this.setState({email:value.target.value})}
                      /> 
                  
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={this.setModalEditar}>
                        Cerrar
                    </Button>
                    <Button color="warning" disabled={editarModal} 
                    onClick={()=>this.onClickUpdate()}>
                        Update
                    </Button>
                   
                </ModalFooter>
            </Modal> 
            <Modal isOpen={this.state.modalEliminar} toggle={this.setModalEliminar}>
                <ModalBody>
                  Estás Seguro que deseas eliminar Empresa
                </ModalBody>
                <ModalFooter>
                  <button className="btn btn-danger" onClick={()=>this.onClickDelete()}>
                    Sí
                  </button>
                  <button
                    className="btn btn-secondary"
                    onClick={()=>{this.setState({modalEliminar:false})}}
                  >
                    No
                  </button>
                </ModalFooter>


              </Modal>
              <Modal isOpen={this.state.modalCrear} toggle={this.setModalCrear}>
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                   Tecnico
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-hidden="true"
                    onClick={this.setModalCrear}
                  >
                    <i className="tim-icons icon-simple-remove" />
                  </button>
                </div>
                <ModalBody >
                     <label>Nombre</label>
                      <input
                        className="form-control bg-white text-dark"
                       
                        type="text"
                        name="nombre"
                        value={this.state.nombre}
                        onChange={(value)=>this.setState({nombre:value.target.value})}
                      /> 
                      <label>Apellido</label>
                      <input
                        className="form-control bg-white text-dark"
                       
                        type="text"
                        name="apellido"
                        value={this.state.apellido}
                        onChange={(value)=>this.setState({apellido:value.target.value})}
                      /> 
                      <label>CUIL</label>
                      <input
                        className="form-control bg-white text-dark"
                        
                        type="text"
                        name="cuil"
                        value={this.state.cuil}
                        onChange={(value)=>this.setState({cuil:value.target.value})}
                      /> 

                      <label>Legajo</label>
                      <input
                        className="form-control bg-white text-dark"
                       
                        type="number"
                        name="legajo"
                        value={this.state.legajo}
                        onChange={(value)=>this.setState({legajo:value.target.value})}
                      /> 
                      <label>Calle</label>
                      <input
                        className="form-control bg-white text-dark"
                       
                        type="text"
                        name="calle"
                        value={this.state.calle}
                        onChange={(value)=>this.setState({calle:value.target.value})}
                      /> 
                      <label>Numero</label>
                      <input
                        className="form-control bg-white text-dark"
                        
                        type="number"
                        name="numero"
                        value={this.state.numero}
                        onChange={(value)=>this.setState({numero:value.target.value})}
                      /> 
                       
                      <Provincia valorprovincia={this.handleProvinciaChange}
                          primerdato={this.state.provincia}
                          valorlocalidad={this.handleLocalidadChange}
                          primeraLocalidad={this.state.localidad}
                          
                        />
                     
                      <label>Telefono</label>
                      <input
                        className="form-control bg-white text-dark"
                        
                        type="number"
                        name="id"
                        value={this.state.telefono}
                         onChange={(value)=>this.setState({telefono:value.target.value})}
                      /> 
                      <label>Email</label>
                      <input
                        className="form-control bg-white text-dark"
                       
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={(value)=>this.setState({email:value.target.value})}
                      /> 
                  
                </ModalBody>
                <ModalFooter>
                     <Button color="secondary" onClick={this.setModalCrear}>
                        Cerrar
                    </Button>
                    <Button color="warning" 
                    onClick={()=>this.onClickSave()}>
                        Crear
                    </Button>
                   
                </ModalFooter>
            </Modal> 
            
      </>

    )
  }

  



  
  
  

  
   
}

export default TablaTecnico;
