package com.example.demo.api;

import com.example.demo.model.Login;
import com.example.demo.model.Nauczyciel;
import com.example.demo.services.LoginManager;
import com.example.demo.services.NauczycielManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/api/nauczyciel")
public class NauczycielApi {
    private NauczycielManager nauczycielManager;

    @Autowired
    public NauczycielApi(NauczycielManager nauczycielManager) {
        this.nauczycielManager = nauczycielManager;
    }

    @GetMapping("/id")
    public Optional<Nauczyciel> getById(@RequestParam Long index) {
        return nauczycielManager.findById(index);
    }

    @GetMapping(value = "/{nauczycielId}")
    public Optional<Nauczyciel> getId(@PathVariable("nauczycielId") Long loginId) {
        return nauczycielManager.findById(loginId);
    }
}
