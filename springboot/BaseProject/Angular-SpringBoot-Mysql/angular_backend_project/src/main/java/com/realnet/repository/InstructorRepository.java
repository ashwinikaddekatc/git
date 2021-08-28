package com.realnet.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.realnet.model.Instructor;

@Repository
public interface InstructorRepository extends JpaRepository<Instructor, Integer> {

}