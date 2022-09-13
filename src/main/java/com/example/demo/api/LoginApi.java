package com.example.demo.api;

import com.example.demo.model.Login;
import com.example.demo.repository.LoginRepository;
import com.example.demo.services.LoginManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/loginy")
public class LoginApi {
    @Autowired
    private LoginRepository loginRepository;

    @Autowired
    private LoginManager loginManager;

    @GetMapping(value = "/{loginId}")
    public Optional<Login> findById(@RequestParam Long loginId) {
        return loginRepository.findById(loginId);
    }

    @GetMapping
    public List<Login> findAll(){
        return loginRepository.findAll();
    }

    @GetMapping(path = "/auth")
    public Long authorize(@RequestParam String login, @RequestParam String password) {
        return loginManager.findNauczyciel(login, password);
    }

    @PostMapping
    public Login saveLogin(@RequestBody Login login){
        return loginRepository.save(login);
    }

    @PutMapping
    public  Login updateLogin(@RequestBody Login login){
        Optional<Login> newLogin = loginRepository.findById(login.getId());
        newLogin.ifPresent(($) -> {
            $.setLogin(login.getLogin());
            $.setHaslo(login.getHaslo());
            loginRepository.save($);
        });
        return newLogin.get();
    }

    @DeleteMapping
    public void deleteLogin(@RequestBody Login login){
        loginRepository.delete(login);
    }
}
