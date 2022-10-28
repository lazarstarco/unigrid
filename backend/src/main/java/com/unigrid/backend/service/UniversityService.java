package com.unigrid.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.unigrid.backend.model.University;
import com.unigrid.backend.repository.UniversityRepository;

@Service
public class UniversityService {

    @Autowired
    UniversityRepository universityRepository;

    public List<University> findAll() {
        return universityRepository.findAll();
    }


    public University getReferenceById(Long id) {
        return universityRepository.getReferenceById(id);
    }
}
