package com.example.demo.api;

import com.example.demo.model.Login;
import com.example.demo.services.LoginManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/api/login")
public class LoginApi {
    private LoginManager loginManager;

    @Autowired
    public LoginApi(LoginManager loginManager) {
        this.loginManager = loginManager;
    }

    @GetMapping("/id")
    public Optional<Login> getById(@RequestParam Long index) {
        return loginManager.findById(index);
    }

    @GetMapping(value = "/{loginId}")
    public Optional<Login> getId(@PathVariable("loginId") Long loginId) {
        return loginManager.findById(loginId);
    }
}
