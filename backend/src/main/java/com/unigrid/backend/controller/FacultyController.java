package com.unigrid.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.unigrid.backend.model.Faculty;
import com.unigrid.backend.service.FacultyService;

@RestController
@RequestMapping("/api/v1")
public class FacultyController {

    @Autowired
    FacultyService facultyService;

    @GetMapping("/faculty")
    public ResponseEntity<List<Faculty>> findAll() {
        return ResponseEntity.ok(facultyService.findAll());
    }

    @GetMapping("/faculty/{id}")
    public ResponseEntity<Faculty> findByRefferenceId(@PathVariable(value = "id") Long id) {
        return ResponseEntity.ok(facultyService.getReferenceById(id));
    }
}
