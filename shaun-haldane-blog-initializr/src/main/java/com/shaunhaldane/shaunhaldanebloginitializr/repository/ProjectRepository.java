package com.shaunhaldane.shaunhaldanebloginitializr.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.shaunhaldane.shaunhaldanebloginitializr.entity.Project;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Long>{

	Project findById(long id);

}
