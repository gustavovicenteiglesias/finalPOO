package com.unsada.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.unsada.app.modelo.Tecnico;

public interface TecnicoServiceApi extends CrudRepository<Tecnico, Integer> {

	Optional<Tecnico> findByNombre(String nombre);

	List<Tecnico> findByNombreLike(String nombre);
	
}
