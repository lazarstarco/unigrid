package com.unigrid.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.unigrid.backend.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
}
