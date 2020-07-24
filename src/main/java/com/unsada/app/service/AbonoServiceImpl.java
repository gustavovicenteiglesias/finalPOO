package com.unsada.app.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.unsada.app.dao.AbonoDaoApi;
import com.unsada.app.modelo.Abono;
@Service
public class AbonoServiceImpl  implements AbonoServiceApi{
	
	@Autowired
	AbonoDaoApi abonoDaoApi;

	@Override
	public long count() {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public void delete(Abono arg0) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deleteAll() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deleteAll(Iterable<? extends Abono> arg0) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deleteById(Integer id) {
		abonoDaoApi.deleteById(id);
		
	}

	@Override
	public boolean existsById(Integer arg0) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public Iterable<Abono> findAll() {
		// TODO Auto-generated method stub
		return abonoDaoApi.findAll();
	}

	@Override
	public Iterable<Abono> findAllById(Iterable<Integer> arg0) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Optional<Abono> findById(Integer id) {
		// TODO Auto-generated method stub
		return abonoDaoApi.findById(id);
	}

	@Override
	public <S extends Abono> S save(S arg0) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public <S extends Abono> Iterable<S> saveAll(Iterable<S> arg0) {
		// TODO Auto-generated method stub
		return null;
	}

}
