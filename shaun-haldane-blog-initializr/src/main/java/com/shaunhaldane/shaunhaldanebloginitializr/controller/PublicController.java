package com.shaunhaldane.shaunhaldanebloginitializr.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.shaunhaldane.shaunhaldanebloginitializr.entity.Post;
import com.shaunhaldane.shaunhaldanebloginitializr.entity.Project;
import com.shaunhaldane.shaunhaldanebloginitializr.repository.PostRepository;
import com.shaunhaldane.shaunhaldanebloginitializr.repository.ProjectRepository;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/public")
public class PublicController {
	
	@Autowired
	private PostRepository postRepository;
	
	@Autowired
	private ProjectRepository projectRepository;

	@GetMapping("/posts")
	public List<Post> getPosts() {
		return postRepository.findAll();
	}
	
	@GetMapping("/posts/{id}")
	public Post getPost(@PathVariable("id") long id) {
		return postRepository.findById(id);
	}
	
	@GetMapping("/projects")
	public List<Project> getProjects() {
		return projectRepository.findAll();
	}
	
	@GetMapping("/projects/{id}")
	public Project getProject(@PathVariable("id") long id) {
		return projectRepository.findById(id);
	}
}
