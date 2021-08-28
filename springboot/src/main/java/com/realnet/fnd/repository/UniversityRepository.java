package com.realnet.fnd.repository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import com.realnet.comm.entity.UniversityEntity;

@Repository
public interface UniversityRepository extends JpaRepository<UniversityEntity, Integer> {

}
