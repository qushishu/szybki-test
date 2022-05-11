package com.example.demo.services;

import com.example.demo.model.Login;
import com.example.demo.repository.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class LoginManager {
    private final LoginRepository loginRepository;

    @Autowired
    public LoginManager(LoginRepository loginRepository) {
        super();
        this.loginRepository = loginRepository;
    }

    public Optional<Login> findById(Long id) {
        return loginRepository.findById(id);
    }

}
