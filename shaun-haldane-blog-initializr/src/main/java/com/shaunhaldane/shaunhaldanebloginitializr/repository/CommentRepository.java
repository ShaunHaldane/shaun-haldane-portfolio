package com.shaunhaldane.shaunhaldanebloginitializr.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.shaunhaldane.shaunhaldanebloginitializr.entity.Comment;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long>{

}
