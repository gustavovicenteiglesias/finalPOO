package com.unsada.app.controller;

import java.util.HashMap;

import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.unsada.app.modelo.Tecnico;
import com.unsada.app.service.TecnicoServiceApi;


@RestController
@RequestMapping(value = "/api/tecnico")
@CrossOrigin("*")
public class TecnicoRestController {
	
	@Autowired
	private TecnicoServiceApi tecnicoServiceApi;

	@GetMapping(value = "/all")
	public Map<String, Object> list() {

		HashMap<String, Object> response = new HashMap<String, Object>();

		try {
			Iterable<Tecnico> tecnicoList;
			tecnicoList =  tecnicoServiceApi.findAll();
			response.put("message", "Successful load");
			response.put("list", tecnicoList);
			response.put("success", true);
			return response;

		} catch (Exception e) {
			response.put("message", e.getMessage());
			response.put("success ", false);
			return response;
		}

	}

	@GetMapping(value = "/find/{id}")
	public Map<String, Object> data(@PathVariable("id") Integer id) {
		HashMap<String, Object> response = new HashMap<String, Object>();

		try {

			Optional<Tecnico> tecnico = tecnicoServiceApi.findById(id);

			if (tecnico.isPresent()) {
				response.put("message", "Successful load");
				response.put("data", tecnico);
				response.put("success", true);
				return response;
			} else {
				response.put("message", "Not found data");
				response.put("data", null);
				response.put("success", false);
				return response;
			}

		} catch (Exception e) {
			response.put("message", "" + e.getMessage());
			response.put("success", false);
			return response;
		}
	}

	@PostMapping(value = "/create")
	public ResponseEntity<String> create(@RequestBody Tecnico data) {

		try {
			System.out.print("Proceso de guardar datos");
			tecnicoServiceApi.save(data);
			return new ResponseEntity<>("Save successful ", HttpStatus.OK);
		} catch (Exception e) {
			System.out.print(e);
			return new ResponseEntity<>("" + e, HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

	@PutMapping(value = "/update/{id}")
	
	public Map<String, Object> update(@PathVariable("id") Integer id,
			@RequestBody Tecnico data ){
		
		HashMap<String,Object> response = new HashMap<String,Object>();
		
		try {  
			data.setIdTecnico(id);
			tecnicoServiceApi.save(data);
			response.put("message","Successful update"); 
			response.put("success",true);
			return response;
		} catch (Exception e) {
			response.put("message",e.getMessage()); 
			response.put("success",false);
			return response;
		}
		
	}

	@DeleteMapping(value = "/delete/{id}")
	
		public Map<String, Object> update(@PathVariable("id") Integer id){
		
		HashMap<String, Object> response = new HashMap<String, Object>();
		
		try {  
			tecnicoServiceApi.deleteById(id);;
			response.put("message","Successful delete"); 
			response.put("success", true);
			return response; 
		} catch (Exception e) {
			response.put("message",e.getMessage()); 
			response.put("success", false);
			return response;
		}
		
	}

}
