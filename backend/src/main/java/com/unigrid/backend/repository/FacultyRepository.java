package com.unigrid.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.unigrid.backend.model.Faculty;

public interface FacultyRepository extends JpaRepository<Faculty, Long> {
}
