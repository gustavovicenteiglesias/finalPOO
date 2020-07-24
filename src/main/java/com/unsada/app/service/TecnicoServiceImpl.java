package com.unsada.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.unsada.app.dao.TecnicoDaoApi;

import com.unsada.app.modelo.Tecnico;
@Service
public class TecnicoServiceImpl implements TecnicoServiceApi {
	
	@Autowired
	TecnicoDaoApi tecnicoDaoApi;

	@Override
	public long count() {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public void delete(Tecnico arg0) {
		// TODO Auto-generated method stub

	}

	@Override
	public void deleteAll() {
		// TODO Auto-generated method stub

	}

	@Override
	public void deleteAll(Iterable<? extends Tecnico> arg0) {
		// TODO Auto-generated method stub

	}

	@Override
	public void deleteById(Integer id) {
		tecnicoDaoApi.deleteById(id);

	}

	@Override
	public boolean existsById(Integer arg0) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public Iterable<Tecnico> findAll() {
		// TODO Auto-generated method stub
		return tecnicoDaoApi.findAll();
	}

	@Override
	public Iterable<Tecnico> findAllById(Iterable<Integer> arg0) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Optional<Tecnico> findById(Integer arg0) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public <S extends Tecnico> S save(S arg0) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public <S extends Tecnico> Iterable<S> saveAll(Iterable<S> arg0) {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public Optional<Tecnico> findByNombre(String nombre){
		
		return tecnicoDaoApi.findByNombre(nombre);
	}



	@Override
	public List<Tecnico> findByNombreLike(String nombre) {
		
		
		return (List<Tecnico>) tecnicoDaoApi.findByNombreLike(nombre);
	}

}
