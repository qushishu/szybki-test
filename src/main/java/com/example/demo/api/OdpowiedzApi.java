package com.example.demo.api;

import com.example.demo.model.Nauczyciel;
import com.example.demo.model.Odpowiedz;
import com.example.demo.services.NauczycielManager;
import com.example.demo.services.OdpowiedzManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/api/odpowiedz")
public class OdpowiedzApi {
    private OdpowiedzManager odpowiedzManager;

    @Autowired
    public OdpowiedzApi(OdpowiedzManager odpowiedzManager) {
        this.odpowiedzManager = odpowiedzManager;
    }

    @GetMapping("/id")
    public Optional<Odpowiedz> getById(@RequestParam Long index) {
        return odpowiedzManager.findById(index);
    }

    @GetMapping(value = "/{odpowiedzId}")
    public Optional<Odpowiedz> getId(@PathVariable("odpowiedzId") Long loginId) {
        return odpowiedzManager.findById(loginId);
    }
}
