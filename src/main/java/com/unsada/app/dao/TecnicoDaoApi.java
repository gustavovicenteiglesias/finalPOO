package com.unsada.app.dao;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;


import com.unsada.app.modelo.Tecnico;

@Transactional
public interface TecnicoDaoApi extends CrudRepository<Tecnico, Integer> {
	Optional<Tecnico> findByNombre(String nombre);
	 Iterable<Tecnico> findByNombreLike(String nombre);
}
