package com.unsada.app.service;




import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;


import com.unsada.app.modelo.Empresa;


public interface EmpresaServiceApi extends CrudRepository<Empresa, Integer> {

	
	Optional<Empresa> findByNombre(String nombre);
	List<Empresa> findByNombreLike(String nombre);

}
