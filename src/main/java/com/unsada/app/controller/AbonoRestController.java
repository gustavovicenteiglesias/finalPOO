package com.unsada.app.controller;

import java.util.HashMap;
import java.util.List;
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

import com.unsada.app.modelo.Abono;

import com.unsada.app.service.AbonoServiceApi;

@RestController
@RequestMapping(value = "/api/abono")
@CrossOrigin("*")
public class AbonoRestController {
	@Autowired
	private AbonoServiceApi abonoServiceApi;

	@GetMapping(value = "/all")
	public Map<String, Object> list() {

		HashMap<String, Object> response = new HashMap<String, Object>();

		try {
			List<Abono> abonoList;
			abonoList = (List<Abono>) abonoServiceApi.findAll();
			response.put("message", "Successful load");
			response.put("list", abonoList);
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

			Optional<Abono> abono = abonoServiceApi.findById(id);

			if (abono.isPresent()) {
				response.put("message", "Successful load");
				response.put("data", abono);
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
	public ResponseEntity<String> create(@RequestBody Abono data) {

		try {
			System.out.print("Proceso de guardar datos");
			abonoServiceApi.save(data);
			return new ResponseEntity<>("Save successful ", HttpStatus.OK);
		} catch (Exception e) {
			System.out.print(e);
			return new ResponseEntity<>("" + e, HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

	@PutMapping(value = "/update/{id}")
	
	public Map<String, Object> update(@PathVariable("id") Integer id,
			@RequestBody Abono data ){
		
		HashMap<String,Object> response = new HashMap<String,Object>();
		
		try {  
			data.setId(id);
			abonoServiceApi.save(data);
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
			abonoServiceApi.deleteById(id);;
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
