package com.unigrid.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.annotation.JacksonAnnotationsInside;
import com.unigrid.backend.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

}
