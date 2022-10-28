package com.unigrid.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.unigrid.backend.model.Demo;
import com.unigrid.backend.repository.DemoRepository;

@Service
public class DemoService {

    @Autowired
    DemoRepository demoRepository;

    public List<Demo> findAll() {
        return demoRepository.findAll();
    }
}
