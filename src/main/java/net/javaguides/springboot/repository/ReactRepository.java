package net.javaguides.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.javaguides.springboot.model.ReactBean;

@Repository
public interface ReactRepository extends JpaRepository<ReactBean,Long> {

}
