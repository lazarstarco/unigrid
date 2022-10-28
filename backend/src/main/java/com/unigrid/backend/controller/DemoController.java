package com.unigrid.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.unigrid.backend.model.Demo;
import com.unigrid.backend.service.DemoService;

@Controller
@RequestMapping("/api/v1")
public class DemoController {

    @Autowired
    DemoService demoService;

    @GetMapping("/demo")
    public ResponseEntity<List<Demo>> getAll() {
        List<Demo> expenses = demoService.findAll();
        return new ResponseEntity<>(expenses, HttpStatus.OK);
    }

    @GetMapping("/demo/test")
    public ResponseEntity<String> test() {
        String test = "Test";
        return new ResponseEntity<>(test, HttpStatus.OK);
    }
}
