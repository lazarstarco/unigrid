package com.unigrid.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.unigrid.backend.model.Faculty;
import com.unigrid.backend.repository.FacultyRepository;

@Service
public class FacultyService {

    @Autowired
    FacultyRepository facultyRepository;

    public List<Faculty> findAll() {
        return facultyRepository.findAll();
    }

    public Faculty getReferenceById(Long id) {
        return facultyRepository.getReferenceById(id);
    }
}
