package com.unigrid.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.unigrid.backend.model.University;
import com.unigrid.backend.service.UniversityService;

@RestController
@RequestMapping("/api/v1")
public class UniversityController {

    @Autowired
    UniversityService universityService;

    @GetMapping("/university")
    public ResponseEntity<List<University>> findAll() {
        return ResponseEntity.ok(universityService.findAll());
    }

    @GetMapping("/university/{id}")
    public ResponseEntity<University> findByRefferenceId(@PathVariable Long id) {
        return ResponseEntity.ok(universityService.getReferenceById(id));
    }
}
