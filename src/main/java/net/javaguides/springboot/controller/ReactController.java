package net.javaguides.springboot.controller;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
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

import net.javaguides.springboot.exception.ResourceNotFound;
import net.javaguides.springboot.model.ReactBean;
import net.javaguides.springboot.repository.ReactRepository;

@CrossOrigin(origins="http://localhost:3000/")
@RestController
@RequestMapping("/api/")
public class ReactController {
@Autowired
	private ReactRepository reactrepo;
	
@GetMapping("/react")
public List<ReactBean>getAllReact(){
	return reactrepo.findAll();
}
@PostMapping("/react")
public ReactBean createreact(@RequestBody ReactBean react) {
	return reactrepo.save(react);
}
@GetMapping("/react/{id}")
public ResponseEntity<ReactBean> getreactbyid(@PathVariable Long id) {
	ReactBean rb = reactrepo.findById(id).orElseThrow(()-> new ResourceNotFound("React doesnt contain this Id:"+id));
	return ResponseEntity.ok(rb);
}
@PutMapping("/react/{id}")
public ResponseEntity<ReactBean> updateEmployee(@PathVariable Long id,@RequestBody ReactBean rb) {
	ReactBean rr =  reactrepo.findById(id).orElseThrow(()-> new ResourceNotFound("React doesnt contain this Id:"+id));
	rr.setName(rb.getName());
	rr.setCode(rb.getCode());
	rr.setEmail(rb.getEmail());
	rr.setAmount(rb.getAmount());
	ReactBean rupdated = reactrepo.save(rr);
	return ResponseEntity.ok(rupdated);
}
@DeleteMapping("/react/{id}")
public ResponseEntity<Map<String,Boolean>>deleteReact(@PathVariable Long id){
	ReactBean rr =  reactrepo.findById(id).orElseThrow(()-> new ResourceNotFound("React doesnt contain this Id:"+id));
	reactrepo.delete(rr);
	Map<String,Boolean> response = new HashMap<>();
	response.put("deleted",Boolean.TRUE);
	return ResponseEntity.ok(response);
}
}
