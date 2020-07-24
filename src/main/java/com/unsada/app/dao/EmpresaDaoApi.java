package com.unsada.app.dao;


import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;


import com.unsada.app.modelo.Empresa;

@Transactional
public interface EmpresaDaoApi extends CrudRepository<Empresa, Integer> {
	
	 Optional<Empresa> findByNombre(String nombre);
	 Iterable<Empresa> findByNombreLike(String nombre);
}
