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
@Table(name = "empresa")

public class Empresa implements Serializable{
	
	 private static final long serialVersionUID = 1L;
	    @Id
	    @GeneratedValue(strategy = GenerationType.AUTO)
	    @Basic(optional = false)
	    @Column(name = "id_empresa")
	    private Integer idEmpresa;
	   
	    @Column(name = "nombre")
	    private String nombre;
	    
	    @Column(name="cuit")
	    private Long cuit;
	   
	    @Column(name = "contacto")
	    private String contacto;
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
	    
	    @OneToMany(cascade = CascadeType.ALL, mappedBy = "idEmpresa")
	    private Collection<Abono> abonoCollection;

	    public Empresa() {
	    }
	    
	    
	    public Empresa(Integer idEmpresa, String nombre, Long cuit, String contacto, Integer telefono, String email,
				String calle, Integer numero, String localidad, String provincia, Collection<Abono> abonoCollection) {
			super();
			this.idEmpresa = idEmpresa;
			this.nombre = nombre;
			this.cuit = cuit;
			this.contacto = contacto;
			this.telefono = telefono;
			this.email = email;
			this.calle = calle;
			this.numero = numero;
			this.localidad = localidad;
			this.provincia = provincia;
			this.abonoCollection = abonoCollection;
		}


		public Empresa(Integer idEmpresa) {
	        this.idEmpresa = idEmpresa;
	    }

	    public Integer getIdEmpresa() {
	        return idEmpresa;
	    }

	    public void setIdEmpresa(Integer idEmpresa) {
	        this.idEmpresa = idEmpresa;
	    }
	    
	    

	    public Long getCuit() {
			return cuit;
		}


		public void setCuit(Long cuit) {
			this.cuit = cuit;
		}


		public String getNombre() {
	        return nombre;
	    }

	    public void setEmpresa(String nombre) {
	        this.nombre = nombre;
	    }

	    public String getContacto() {
	        return contacto;
	    }

	    public void setContacto(String contacto) {
	        this.contacto = contacto;
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
	    public int hashCode() {
	        int hash = 0;
	        hash += (idEmpresa != null ? idEmpresa.hashCode() : 0);
	        return hash;
	    }

	    @Override
	    public boolean equals(Object object) {
	        // TODO: Warning - this method won't work in the case the id fields are not set
	        if (!(object instanceof Empresa)) {
	            return false;
	        }
	        Empresa other = (Empresa) object;
	        if ((this.idEmpresa == null && other.idEmpresa != null) || (this.idEmpresa != null && !this.idEmpresa.equals(other.idEmpresa))) {
	            return false;
	        }
	        return true;
	    }

	    @Override
	    public String toString() {
	        return "Emtity.Empresa[ idEmpresa=" + idEmpresa + " ]";
	    }
	    

		
}