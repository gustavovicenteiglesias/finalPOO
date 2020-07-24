package com.unsada.app.service;



import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.unsada.app.dao.EmpresaDaoApi;
import com.unsada.app.modelo.Empresa;

import com.unsada.app.service.EmpresaServiceApi;

@Service
public class EmpresaServiceImpl  implements EmpresaServiceApi {
	
	@Autowired
	EmpresaDaoApi empresaDaoApi;
	@Override
	public long count() {
		// TODO Auto-generated method stub
		return 0;
	}

	

	@Override
	public void deleteAll() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deleteAll(Iterable<? extends Empresa> arg0) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deleteById(Integer id) {
		empresaDaoApi.deleteById(id);
		
	}

	@Override
	public boolean existsById(Integer arg0) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public Iterable<Empresa> findAll() {
		// TODO Auto-generated method stub
		return empresaDaoApi.findAll();
	}

	@Override
	public Iterable<Empresa> findAllById(Iterable<Integer> arg0) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Optional<Empresa> findById(Integer id) {
		// TODO Auto-generated method stub
		return empresaDaoApi.findById( id);
	}
	
	

	@Override
	public <S extends Empresa> S save(S arg0) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public <S extends Empresa> Iterable<S> saveAll(Iterable<S> arg0) {
		// TODO Auto-generated method stub
		return null;
	}



	@Override
	public void delete(Empresa arg0) {
		// TODO Auto-generated method stub
		
	}
	
	@Override
	public Optional<Empresa> findByNombre(String nombre){
		
		return empresaDaoApi.findByNombre(nombre);
	}



	@Override
	public List<Empresa> findByNombreLike(String nombre) {
		
		
		return (List<Empresa>) empresaDaoApi.findByNombreLike(nombre);
	}

}
