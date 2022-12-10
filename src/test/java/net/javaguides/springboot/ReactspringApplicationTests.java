package net.javaguides.springboot;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import net.javaguides.springboot.model.ReactBean;

@SpringBootTest
class ReactspringApplicationTests {
List<ReactBean> rb = new ArrayList<>();
    ReactBean r = new ReactBean();
    
@Test
	public void getAllReact(){
		r.setName("this");
		r.setId(1);
		r.setEmail("aaa.com");
		r.setCode("t1");
		rb.add(r);
 for(Object rr:rb) {
	 assertEquals(rr, r);
 }
}
@Test
	public void insert() {
	r.setId(9);
	rb.add(r);
	assertEquals(9,r.getId());
}
@Test
public void getname() {
	r.setName("Name");
	rb.add(r);
	assertEquals("Name",r.getName());
}
@Test
public void delete() {
	r.setName("Name");
	rb.add(r);
	rb.remove(0);
	for(Object rr:rb) {
		 assertEquals(' ', rr);
	 }
}
}