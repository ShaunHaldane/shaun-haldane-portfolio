package com.shaunhaldane.shaunhaldanebloginitializr.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.shaunhaldane.shaunhaldanebloginitializr.entity.Post;

@Repository
public interface PostRepository extends JpaRepository<Post, Long>{

	Post findById(long id);

}
