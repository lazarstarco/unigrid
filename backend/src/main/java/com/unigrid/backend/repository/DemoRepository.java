package com.unigrid.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.unigrid.backend.model.Demo;

public interface DemoRepository extends JpaRepository<Demo, Long> {

}
