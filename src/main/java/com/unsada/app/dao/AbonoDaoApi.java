package com.unsada.app.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;

import com.unsada.app.modelo.Abono;




@Transactional
public interface AbonoDaoApi extends CrudRepository<Abono, Integer>{
	
}
