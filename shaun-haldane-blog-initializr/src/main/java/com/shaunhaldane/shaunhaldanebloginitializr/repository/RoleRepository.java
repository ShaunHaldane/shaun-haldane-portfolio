package com.shaunhaldane.shaunhaldanebloginitializr.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.shaunhaldane.shaunhaldanebloginitializr.model.ERole;
import com.shaunhaldane.shaunhaldanebloginitializr.entity.Role;


@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
	Optional<Role> findByName(ERole name);
}
