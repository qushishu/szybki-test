package com.example.demo.services;

import com.example.demo.model.Login;
import com.example.demo.model.Nauczyciel;
import com.example.demo.repository.LoginRepository;
import com.example.demo.repository.NauczycielRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class LoginManager {
    private final LoginRepository loginRepository;
    private final NauczycielManager nauczycielManager;

    @Autowired
    public LoginManager(LoginRepository loginRepository, NauczycielManager nauczycielManager) {
        super();
        this.loginRepository = loginRepository;
        this.nauczycielManager = nauczycielManager;
    }

    public Optional<Login> findById(Long id) {
        return loginRepository.findById(id);
    }

    public Long findNauczyciel(String login, String password) {
        Nauczyciel nauczyciel = nauczycielManager.findByLogin(login).orElseThrow();
        if (nauczyciel.getLogin().getHaslo().equals(password)) {
            return nauczyciel.getId();
        }
        throw new NoSuchElementException();
    }

}
