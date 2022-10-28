package com.unigrid.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.unigrid.backend.model.University;

public interface UniversityRepository extends JpaRepository<University, Long> {
}
