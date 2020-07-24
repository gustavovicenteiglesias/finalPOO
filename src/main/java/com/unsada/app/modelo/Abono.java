package com.unsada.app.modelo;


import java.io.Serializable;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;





@Entity
@Table (name = "abono")

public class Abono implements Serializable {
	
	private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Basic(optional = false)
    @Column(name = "id")
    private Integer id;
   
    @Column(name = "marca")
    private String marca;
   
    @Column(name = "modelo")
    private String modelo;
    @Column(name = "potencia")
    private Integer potencia;
   
    @Column(name = "motor_marca")
    private String motorMarca;
   
    @Column(name = "motor_modelo")
    private String motorModelo;
   
    @Column(name = "motor_numero")
    private String motorNumero;
    @Column(name = "fecha_anterior")
   
    private String fechaAnterior;
    @Column(name = "fecha_actual")
   
    private String fechaActual;
    @Column(name = "horometro_actual")
    private Integer horometroActual;
    @Column(name = "horometro_anterior")
    private Integer horometroAnterior;
    
    @Column(name = "cabina_acustica")
    private String cabinaAcustica;
  
    @Column(name = "cabina_pintura")
    private String cabinaPintura;
   
    @Column(name = "cabina_cerradura")
    private String cabinaCerradura;
   
    @Column(name = "enfriamiento_manguera")
    private String enfriamientoManguera;
   
    @Column(name = "enfriamiento_perdidas")
    private String enfriamientoPerdidas;
    
    @Column(name = "enfriamiento_nivel")
    private String enfriamientoNivel;
    @Column(name = "bateria_cantidad")
    private Integer bateriaCantidad;
   
    @Column(name = "bateria_acido")
    private String bateriaAcido;
   
    @Column(name = "bateria_conexion")
    private String bateriaConexion;
   
    @Column(name = "bateria_marca")
    private String bateriaMarca;
   
    @Column(name = "bateria_estado")
    private String bateriaEstado;
    
    @Column(name = "bateria_bornes")
    private String bateriaBornes;
    @Column(name = "tension_parado")
    private Float tensionParado;
    @Column(name = "tension_marcha")
    private Float tensionMarcha;
    @Column(name = "tension_arranque")
    private Float tensionArranque;
    @Column(name = "fecha_instalacion")
    //@Temporal(TemporalType.DATE)
    private String fechaInstalacion;
   
    @Column(name = "perdida_combustible")
    private String perdidaCombustible;
  
    @Column(name = "perdida_aceite")
    private String perdidaAceite;
   
    @Column(name = "perdida_agua")
    private String perdidaAgua;
   
    @Column(name = "estado_mangueras")
    private String estadoMangueras;
    
    @Column(name = "estado_filtro_aire")
    private String estadoFiltroAire;
    
    @Column(name = "estado_rodantes")
    private String estadoRodantes;
   
    @Column(name = "nivel_aceite")
    private String nivelAceite;
   
    @Column(name = "nivel_combustible")
    private String nivelCombustible;
  
    @Column(name = "presion_aceite")
    private String presionAceite;
    @Column(name = "tension_rs")
    private Integer tensionRs;
    @Column(name = "tension_st")
    private Integer tensionSt;
    @Column(name = "tension_rt")
    private Integer tensionRt;
    @Column(name = "tension_rn")
    private Integer tensionRn;
    @Column(name = "tension_sn")
    private Integer tensionSn;
    @Column(name = "tension_tn")
    private Integer tensionTn;
 
    @Column(name = "aut_man")
    private String autMan;
   
    @Column(name = "observaciones")
    private String observaciones;
   
    
    @Column(name = "id_firma")
    private String idFirma;
    @JoinColumn(name = "id_empresa", referencedColumnName = "id_empresa")
    @ManyToOne(optional = false)
    private Empresa idEmpresa;
    
    @JoinColumn(name="id_tecnico", referencedColumnName="id_tecnico")
    @ManyToOne(optional=false)
    private Tecnico idTecnico;
    
    public Abono(Integer id, String marca, String modelo, Integer potencia, String motorMarca, String motorModelo,
			String motorNumero, String fechaAnterior, String fechaActual, Integer horometroActual,
			Integer horometroAnterior, String cabinaAcustica, String cabinaPintura, String cabinaCerradura,
			String enfriamientoManguera, String enfriamientoPerdidas, String enfriamientoNivel, Integer bateriaCantidad,
			String bateriaAcido, String bateriaConexion, String bateriaMarca, String bateriaEstado,
			String bateriaBornes, Float tensionParado, Float tensionMarcha, Float tensionArranque,
			String fechaInstalacion, String perdidaCombustible, String perdidaAceite, String perdidaAgua,
			String estadoMangueras, String estadoFiltroAire, String estadoRodantes, String nivelAceite,
			String nivelCombustible, String presionAceite, Integer tensionRs, Integer tensionSt, Integer tensionRt,
			Integer tensionRn, Integer tensionSn, Integer tensionTn, String autMan, String observaciones,
			String idFirma, Empresa idEmpresa, Tecnico idTecnico) {
		super();
		this.id = id;
		this.marca = marca;
		this.modelo = modelo;
		this.potencia = potencia;
		this.motorMarca = motorMarca;
		this.motorModelo = motorModelo;
		this.motorNumero = motorNumero;
		this.fechaAnterior = fechaAnterior;
		this.fechaActual = fechaActual;
		this.horometroActual = horometroActual;
		this.horometroAnterior = horometroAnterior;
		this.cabinaAcustica = cabinaAcustica;
		this.cabinaPintura = cabinaPintura;
		this.cabinaCerradura = cabinaCerradura;
		this.enfriamientoManguera = enfriamientoManguera;
		this.enfriamientoPerdidas = enfriamientoPerdidas;
		this.enfriamientoNivel = enfriamientoNivel;
		this.bateriaCantidad = bateriaCantidad;
		this.bateriaAcido = bateriaAcido;
		this.bateriaConexion = bateriaConexion;
		this.bateriaMarca = bateriaMarca;
		this.bateriaEstado = bateriaEstado;
		this.bateriaBornes = bateriaBornes;
		this.tensionParado = tensionParado;
		this.tensionMarcha = tensionMarcha;
		this.tensionArranque = tensionArranque;
		this.fechaInstalacion = fechaInstalacion;
		this.perdidaCombustible = perdidaCombustible;
		this.perdidaAceite = perdidaAceite;
		this.perdidaAgua = perdidaAgua;
		this.estadoMangueras = estadoMangueras;
		this.estadoFiltroAire = estadoFiltroAire;
		this.estadoRodantes = estadoRodantes;
		this.nivelAceite = nivelAceite;
		this.nivelCombustible = nivelCombustible;
		this.presionAceite = presionAceite;
		this.tensionRs = tensionRs;
		this.tensionSt = tensionSt;
		this.tensionRt = tensionRt;
		this.tensionRn = tensionRn;
		this.tensionSn = tensionSn;
		this.tensionTn = tensionTn;
		this.autMan = autMan;
		this.observaciones = observaciones;
		this.idFirma = idFirma;
		this.idEmpresa = idEmpresa;
		this.idTecnico = idTecnico;
	}

	public Abono() {
    }

    public Abono(Integer id) {
        this.id = id;
    }

    public Abono(Integer id, String idFirma) {
        this.id = id;
        this.idFirma = idFirma;
    }
   
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public Integer getPotencia() {
        return potencia;
    }

    public void setPotencia(Integer potencia) {
        this.potencia = potencia;
    }

    public String getMotorMarca() {
        return motorMarca;
    }

    public void setMotorMarca(String motorMarca) {
        this.motorMarca = motorMarca;
    }

    public String getMotorModelo() {
        return motorModelo;
    }

    public void setMotorModelo(String motorModelo) {
        this.motorModelo = motorModelo;
    }

    public String getMotorNumero() {
        return motorNumero;
    }

    public void setMotorNumero(String motorNumero) {
        this.motorNumero = motorNumero;
    }

    public String getFechaAnterior() {
        return fechaAnterior;
    }

    public void setFechaAnterior(String fechaAnterior) {
        this.fechaAnterior = fechaAnterior;
    }

    public String getFechaActual() {
        return fechaActual;
    }

    public void setFechaActual(String fechaActual) {
        this.fechaActual = fechaActual;
    }

    public Integer getHorometroActual() {
        return horometroActual;
    }

    public void setHorometroActual(Integer horometroActual) {
        this.horometroActual = horometroActual;
    }

    public Integer getHorometroAnterior() {
        return horometroAnterior;
    }

    public void setHorometroAnterior(Integer horometroAnterior) {
        this.horometroAnterior = horometroAnterior;
    }

    public String getCabinaAcustica() {
        return cabinaAcustica;
    }

    public void setCabinaAcustica(String cabinaAcustica) {
        this.cabinaAcustica = cabinaAcustica;
    }

    public String getCabinaPintura() {
        return cabinaPintura;
    }

    public void setCabinaPintura(String cabinaPintura) {
        this.cabinaPintura = cabinaPintura;
    }

    public String getCabinaCerradura() {
        return cabinaCerradura;
    }

    public void setCabinaCerradura(String cabinaCerradura) {
        this.cabinaCerradura = cabinaCerradura;
    }

    public String getEnfriamientoManguera() {
        return enfriamientoManguera;
    }

    public void setEnfriamientoManguera(String enfriamientoManguera) {
        this.enfriamientoManguera = enfriamientoManguera;
    }

    public String getEnfriamientoPerdidas() {
        return enfriamientoPerdidas;
    }

    public void setEnfriamientoPerdidas(String enfriamientoPerdidas) {
        this.enfriamientoPerdidas = enfriamientoPerdidas;
    }

    public String getEnfriamientoNivel() {
        return enfriamientoNivel;
    }

    public void setEnfriamientoNivel(String enfriamientoNivel) {
        this.enfriamientoNivel = enfriamientoNivel;
    }

    public Integer getBateriaCantidad() {
        return bateriaCantidad;
    }

    public void setBateriaCantidad(Integer bateriaCantidad) {
        this.bateriaCantidad = bateriaCantidad;
    }

    public String getBateriaAcido() {
        return bateriaAcido;
    }

    public void setBateriaAcido(String bateriaAcido) {
        this.bateriaAcido = bateriaAcido;
    }

    public String getBateriaConexion() {
        return bateriaConexion;
    }

    public void setBateriaConexion(String bateriaConexion) {
        this.bateriaConexion = bateriaConexion;
    }

    public String getBateriaMarca() {
        return bateriaMarca;
    }

    public void setBateriaMarca(String bateriaMarca) {
        this.bateriaMarca = bateriaMarca;
    }

    public String getBateriaEstado() {
        return bateriaEstado;
    }

    public void setBateriaEstado(String bateriaEstado) {
        this.bateriaEstado = bateriaEstado;
    }

    public String getBateriaBornes() {
        return bateriaBornes;
    }

    public void setBateriaBornes(String bateriaBornes) {
        this.bateriaBornes = bateriaBornes;
    }

    public Float getTensionParado() {
        return tensionParado;
    }

    public void setTensionParado(Float tensionParado) {
        this.tensionParado = tensionParado;
    }

    public Float getTensionMarcha() {
        return tensionMarcha;
    }

    public void setTensionMarcha(Float tensionMarcha) {
        this.tensionMarcha = tensionMarcha;
    }

    public Float getTensionArranque() {
        return tensionArranque;
    }

    public void setTensionArranque(Float tensionArranque) {
        this.tensionArranque = tensionArranque;
    }

    public String getFechaInstalacion() {
        return fechaInstalacion;
    }

    public void setFechaInstalacion(String fechaInstalacion) {
        this.fechaInstalacion = fechaInstalacion;
    }

    public String getPerdidaCombustible() {
        return perdidaCombustible;
    }

    public void setPerdidaCombustible(String perdidaCombustible) {
        this.perdidaCombustible = perdidaCombustible;
    }

    public String getPerdidaAceite() {
        return perdidaAceite;
    }

    public void setPerdidaAceite(String perdidaAceite) {
        this.perdidaAceite = perdidaAceite;
    }

    public String getPerdidaAgua() {
        return perdidaAgua;
    }

    public void setPerdidaAgua(String perdidaAgua) {
        this.perdidaAgua = perdidaAgua;
    }

    public String getEstadoMangueras() {
        return estadoMangueras;
    }

    public void setEstadoMangueras(String estadoMangueras) {
        this.estadoMangueras = estadoMangueras;
    }

    public String getEstadoFiltroAire() {
        return estadoFiltroAire;
    }

    public void setEstadoFiltroAire(String estadoFiltroAire) {
        this.estadoFiltroAire = estadoFiltroAire;
    }

    public String getEstadoRodantes() {
        return estadoRodantes;
    }

    public void setEstadoRodantes(String estadoRodantes) {
        this.estadoRodantes = estadoRodantes;
    }

    public String getNivelAceite() {
        return nivelAceite;
    }

    public void setNivelAceite(String nivelAceite) {
        this.nivelAceite = nivelAceite;
    }

    public String getNivelCombustible() {
        return nivelCombustible;
    }

    public void setNivelCombustible(String nivelCombustible) {
        this.nivelCombustible = nivelCombustible;
    }

    public String getPresionAceite() {
        return presionAceite;
    }

    public void setPresionAceite(String presionAceite) {
        this.presionAceite = presionAceite;
    }

    public Integer getTensionRs() {
        return tensionRs;
    }

    public void setTensionRs(Integer tensionRs) {
        this.tensionRs = tensionRs;
    }

    public Integer getTensionSt() {
        return tensionSt;
    }

    public void setTensionSt(Integer tensionSt) {
        this.tensionSt = tensionSt;
    }

    public Integer getTensionRt() {
        return tensionRt;
    }

    public void setTensionRt(Integer tensionRt) {
        this.tensionRt = tensionRt;
    }

    public Integer getTensionRn() {
        return tensionRn;
    }

    public void setTensionRn(Integer tensionRn) {
        this.tensionRn = tensionRn;
    }

    public Integer getTensionSn() {
        return tensionSn;
    }

    public void setTensionSn(Integer tensionSn) {
        this.tensionSn = tensionSn;
    }

    public Integer getTensionTn() {
        return tensionTn;
    }

    public void setTensionTn(Integer tensionTn) {
        this.tensionTn = tensionTn;
    }

    public String getAutMan() {
        return autMan;
    }

    public void setAutMan(String autMan) {
        this.autMan = autMan;
    }

    public String getObservaciones() {
        return observaciones;
    }

    public void setObservaciones(String observaciones) {
        this.observaciones = observaciones;
    }

    public String getIdFirma() {
        return idFirma;
    }

    public void setIdFirma(String idFirma) {
        this.idFirma = idFirma;
    }
    
    public Empresa getIdEmpresa() {
        return idEmpresa;
    }

    public void setIdEmpresa(Empresa idEmpresa) {
        this.idEmpresa = idEmpresa;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (id != null ? id.hashCode() : 0);
        return hash;
    }
    
    
    public Tecnico getIdTecnico() {
		return idTecnico;
	}

	public void setIdTecnico(Tecnico idTecnico) {
		this.idTecnico = idTecnico;
	}

	@Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Abono)) {
            return false;
        }
        Abono other = (Abono) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
	public String toString() {
		return "Abono [id=" + id + "]";
	}
    
	

}
