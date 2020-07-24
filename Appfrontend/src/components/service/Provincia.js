import React from "react";
import provinciaService from "./Localidad"; 
import {
  
  Label,
  Input,
  FormGroup
  
} from "reactstrap";

 export default class Provincia extends React.Component {
 	
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeLocalidad=this.handleChangeLocalidad.bind(this);
   	this.state = {
     listProvincia:[],
     listLocalidad:[]
    }

   
    
   
  }
  	async handleChange(e) {
    this.props.valorprovincia(e.target.value);
   	console.log("Localidad  List");
    const resp = await provinciaService.list(e.target.value);
    console.log(resp);
    this.setState({listLocalidad:resp.municipios});
  }

  	handleChangeLocalidad(e){
  		this.props.valorlocalidad(e.target.value);
  	}
  	

  async componentDidMount(){

    console.log("Provincia  List");
    const res = await provinciaService.get()
    console.log(res);
    this.setState({listProvincia:res.provincias});

   	
  }
  

  render() {
  		const provincia = this.props.provincia;
  		const primerdato=this.props.primerdato;
  		const localidad=this.props.localidad;
  		const primeraLocalidad=this.props.primeraLocalidad;
      const soloLectura=this.props.soloLectura;
    return (
    		<>
    		<FormGroup>
    		<Label for="provincia">Provincia</Label>
     		<Input type="select" name="provincia" 
     		value={provincia} onChange={this.handleChange} 
        className="bg-white text-dark" readOnly={soloLectura}>
         			<option value={primerdato}>{primerdato}</option>
            {this.state.listProvincia.map((data,i)=>{
            	return(
            		
            		<option value={data.nombre}>{data.nombre}</option>
            



           				); 
       				}
   			)}
   			</Input>
			</FormGroup>

			<FormGroup>
         	<Label for="localidad">Localidad</Label>
        	

        	<Input type="select" name="localidad" 
     		value={localidad} onChange={this.handleChangeLocalidad} 
        className="bg-white text-dark" readOnly={soloLectura}
        >
         	<option value={primeraLocalidad} >{primeraLocalidad}</option>
            {this.state.listLocalidad.map((data,i)=>{
            	return(
            		
            		<option value={data.nombre}>{data.nombre}</option>
            



           				); 
       				}
   			)}

         
        	</Input>
        	</FormGroup>
        	</>
    );
  }
}

