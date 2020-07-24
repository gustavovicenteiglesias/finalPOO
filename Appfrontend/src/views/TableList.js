
import React from "react";
import { Link } from "react-router-dom";
import routes from "routes.js";

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
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input
} from "reactstrap";
import empresaServices from "../components/service/Empresa"
import Provincia from "../components/service/Provincia";

class Tables extends React.Component {
    constructor(props)
  {
    super(props)
    this.handleProvinciaChange=this.handleProvinciaChange.bind(this);
    this.handleLocalidadChange=this.handleLocalidadChange.bind(this);
    this.setModalEditar=this.setModalEditar.bind(this);
    this.setEmpresa=this.setEmpresa.bind(this);
    this.setIdDelete=this.setIdDelete.bind(this);
    this.valorSearchEmpresa=this.valorSearchEmpresa.bind(this);
    this.setModalCrear=this.setModalCrear.bind(this);

    //this.modalbusqueda=this.modalbusqueda.bind(this);
    //this.modalB=this.modalB.bind(this);
    this.state = {
      listEmpresa:[],
      listBusqueda:[],
          idEmpresa:'',
          nombre:'',
          cuit:'',
          calle:'',
          numero:'',
          localiad:'',
          provincia:'',
          contacto:'',
          telefono:'',
          email:'',
          ie:'',
          ide:'',
          busqueda:'',
      modalEditar:false,
      modalEliminar:false,
      modalCrear:false,
      editarModal:true,
      ocultar:""
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

    setEmpresa(elemento,caso){
      if (caso == 'Editar'){
                this.setState({editarModal:false})
            }else{
                this.setState({editarModal:true})
            }
    
    this.setState((state) => ({
      
      idEmpresa:elemento.idEmpresa,
          nombre:elemento.nombre,
          cuit:elemento.cuit,
          calle:elemento.calle,
          numero:elemento.numero,
          localidad:elemento.localidad,
          provincia:elemento.provincia,
          contacto:elemento.contacto,
          telefono:elemento.telefono,
          email:elemento.email,
          modalEditar:true,
          
          
    }))
     
         
 }
  setModalEliminar(){
    this.setState({modalEliminar:!this.state.modalEliminar})
  }

  setIdDelete(i,id){
      this.setState({
        ie:i,
        ide:id,
        modalEliminar:true
      })
  }

   setModalCrear(){
    this.setState({
      idEmpresa:'',
          nombre:'',
          cuit:'',
          calle:'',
          numero:'',
          localiad:'',
          provincia:'',
          contacto:'',
          telefono:'',
          email:'',
      modalCrear:!this.state.modalCrear});

   }

  async resetLista(){

    const res = await empresaServices.list()
    console.log(res);
    if (res.success) {
       this.setState({listEmpresa:res.list})
       this.filtrarElementos();
    }
    else {
      alert("Error server ==>"+JSON.stringify(res))
    }

  }

    async onClickSave()
  {
    console.log(this.state.idEmpresa);
    const res = await empresaServices.create(this.state)
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
    console.log(this.state.idEmpresa);
    const res = await empresaServices.update(this.state)
    if (res.success) {
      alert(res.message)
    
     this.setState({modalEditar:false});
    }
    else {
      console.log("Error");
      console.log(res);
      alert("Error ==>"+JSON.stringify(res.data))
      this.setState({modalEditar:false});
    }
     this.resetLista();
      this.filtrarElementos();
  }


  async onClickDelete()
  {
    const id=this.state.ide;
    const i=this.state.ie;
    var yes = true;
    console.log(id,i);
    if (yes === true){ 
      
      const res = await empresaServices.delete(id)

      if (res.success) {
        this.resetLista();
        const list =this.state.listBusqueda
        list.splice(i,1)
         this.setState((state)=>({listBusqueda:list,
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
  
  await this.setState({
    busqueda:emp
  })
  this.filtrarElementos();
 }

 filtrarElementos=()=>{
  const lista=this.state.listEmpresa;
  var search=lista.filter(item=>{
    if(item.idEmpresa.toString().includes(this.state.busqueda)||
       item.nombre.toLowerCase().includes(this.state.busqueda)||
       item.nombre.includes(this.state.busqueda))
  
            {
              return item
            }
  })
    console.log(search)
    this.setState({listBusqueda:search})
 }
  async componentDidMount(){

   this.setState({listBusqueda:this.state.listEmpresa});
    console.log("Mounted List");
    const res = await empresaServices.list()
    console.log(res);
    if (res.success) {
      this.setState({listEmpresa:res.list})
    }
    else {
      alert("Error server ==>"+JSON.stringify(res))
    }

    this.setState({listBusqueda:this.state.listEmpresa});

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
                  <CardTitle tag="h4">Tabla Empresas</CardTitle>
                 
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                        
                        <th>Empresa</th>
                        <th>CUIT</th>
                        <th>Contacto</th>
                        <th>Email</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
              this.state.listBusqueda.map((data,i)=>{
                return(
                  <tr>
                    <td scope="row">{data.nombre}</td>
                    <td>{data.cuit}</td>
                    <td>{data.contacto}</td>
                    <td>{data.email}</td>
                    
                    <td>
                           <Button className="btn-icon" color="info" size="sm" 
                           onClick={()=>{this.setEmpresa(data,'Ver')}}
                        href="#">
                          <i className="fas fa-eye" />
                          </Button>{` `}
                           
                         <Button href="#"  className="btn-icon" color="success" size="sm"
                          onClick={()=>{this.setEmpresa(data,'Editar')}}>
                          <i className="fas fa-pencil-alt"></i>
                         </Button>{` `}

                          <Button className="btn-icon" color="danger" size="sm" onClick={()=>this.setIdDelete(i,data.idEmpresa)}
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
                   Empresa
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
                      <label>CUIT</label>
                      <input
                        className="form-control bg-white text-dark"
                        readOnly={editarModal}
                        type="text"
                        name="cuit"
                        value={this.state.cuit}
                        onChange={(value)=>this.setState({cuit:value.target.value})}
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
                        type="text"
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
                      
                      <label>Contacto</label>
                      <input
                        className="form-control bg-white text-dark"
                        readOnly={editarModal}
                        type="text"
                        name="contacto"
                        value={this.state.contacto}
                        onChange={(value)=>this.setState({contacto:value.target.value})}
                      /> 
                      <label>Telefono</label>
                      <input
                        className="form-control bg-white text-dark"
                        readOnly={editarModal}
                        type="text"
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
                   Empresa
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
                <ModalBody>
                 <label>Nombre</label>
                      <input
                        className="form-control bg-white text-dark"
                        
                        type="text"
                        name="nombre"
                        value={this.state.nombre}
                        onChange={(value)=>this.setState({nombre:value.target.value})}
                      /> 
                      <label>CUIT</label>
                      <input
                        className="form-control bg-white text-dark"
                        
                        type="text"
                        name="cuit"
                        value={this.state.cuit}
                        onChange={(value)=>this.setState({cuit:value.target.value})}
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
                        
                        type="text"
                        name="numero"
                        value={this.state.numero}
                        onChange={(value)=>this.setState({numero:value.target.value})}
                      /> 
                       
                      <Provincia valorprovincia={this.handleProvinciaChange}
                          primerdato={this.state.provincia}
                          valorlocalidad={this.handleLocalidadChange}
                          primeraLocalidad={this.state.localidad}
                         
                        />
                      
                      <label>Contacto</label>
                      <input
                        className="form-control bg-white text-dark"
                       
                        type="text"
                        name="contacto"
                        value={this.state.contacto}
                        onChange={(value)=>this.setState({contacto:value.target.value})}
                      /> 
                      <label>Telefono</label>
                      <input
                        className="form-control bg-white text-dark"
                        
                        type="text"
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
                  <button className="btn btn-danger btn-block" onClick={()=>this.onClickSave()}>
                    Crear
                  </button>
                
                </ModalFooter>
              </Modal>
            
      </>

    )
  }

  



  
  
  

  
   
}

export default Tables;
