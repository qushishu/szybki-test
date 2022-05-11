package com.example.demo.api;

import com.example.demo.model.OdpowiedzStudenta;
import com.example.demo.model.Pytanie;
import com.example.demo.services.OdpowiedzStudentaManager;
import com.example.demo.services.PytanieManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/api/pytanie")
public class PytanieApi {
    private PytanieManager pytanieManager;

    @Autowired
    public PytanieApi(PytanieManager pytanieManager) {
        this.pytanieManager = pytanieManager;
    }

    @GetMapping("/id")
    public Optional<Pytanie> getById(@RequestParam Long index) {
        return pytanieManager.findById(index);
    }

    @GetMapping(value = "/{pytanieId}")
    public Optional<Pytanie> getId(@PathVariable("pytanieId") Long loginId) {
        return pytanieManager.findById(loginId);
    }
}
