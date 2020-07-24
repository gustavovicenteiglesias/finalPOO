package com.unsada.app.modelo;

import java.io.Serializable;
import java.util.Collection;

import javax.persistence.Basic;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "tecnico")

public class Tecnico implements Serializable{
	private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Basic(optional = false)
    @Column(name = "id_tecnico")
    private Integer idTecnico;
   
    @Column(name="cuil")
    private Long cuil;
    
    @Column(name="legajo")
    private Long legajo;
    
    @Column(name = "nombre")
    private String nombre;
   
    @Column(name = "apellido")
    private String apellido;
    
    
    @Column(name = "telefono")
    private Integer telefono;
    
    @Column(name = "email")
    private String email;
   
    @Column(name = "calle")
    private String calle;
    
    @Column(name = "numero")
    private Integer numero;
   
    @Column(name = "localidad")
    private String localidad;
   
    @Column(name = "provincia")
    private String provincia;
    
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "idTecnico")
    private Collection<Abono> abonoCollection;

	public Tecnico(Integer idTecnico,Long cuil, Long legajo, String nombre, String apellido, Integer telefono, String email,
			String calle, Integer numero, String localidad, String provincia, Collection<Abono> abonoCollection) {
		super();
		this.idTecnico = idTecnico;
		this.cuil=cuil;
		this.legajo = legajo;
		this.nombre = nombre;
		this.apellido = apellido;
		this.telefono = telefono;
		this.email = email;
		this.calle = calle;
		this.numero = numero;
		this.localidad = localidad;
		this.provincia = provincia;
		this.abonoCollection = abonoCollection;
	}

	public Tecnico() {
		super();
	}
	
	

	public Tecnico(Integer idTecnico) {
		super();
		this.idTecnico = idTecnico;
	}

	public Integer getIdTecnico() {
		return idTecnico;
	}
	
	public void setIdTecnico(Integer idTecnico) {
		this.idTecnico = idTecnico;
	}
	
	public Long getCuil() {
		return cuil;
	}

	public void setCuil(Long cuil) {
		this.cuil = cuil;
	}
	
	public Long getLegajo() {
		return legajo;
	}

	public void setLegajo(Long legajo) {
		this.legajo = legajo;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getApellido() {
		return apellido;
	}

	public void setApellido(String apellido) {
		this.apellido = apellido;
	}

	public Integer getTelefono() {
		return telefono;
	}

	public void setTelefono(Integer telefono) {
		this.telefono = telefono;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getCalle() {
		return calle;
	}

	public void setCalle(String calle) {
		this.calle = calle;
	}

	public Integer getNumero() {
		return numero;
	}

	public void setNumero(Integer numero) {
		this.numero = numero;
	}

	public String getLocalidad() {
		return localidad;
	}

	public void setLocalidad(String localidad) {
		this.localidad = localidad;
	}

	public String getProvincia() {
		return provincia;
	}

	public void setProvincia(String provincia) {
		this.provincia = provincia;
	}

	

	public void setAbonoCollection(Collection<Abono> abonoCollection) {
		this.abonoCollection = abonoCollection;
	}

	

	@Override
	public String toString() {
		return "Tecnico [idTecnico=" + idTecnico + "]";
	}



    
    

}
