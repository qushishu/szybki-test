package com.example.demo.api;

import com.example.demo.model.OdpowiedzStudenta;
import com.example.demo.model.Pytanie;
import com.example.demo.repository.PytanieRepository;
import com.example.demo.services.OdpowiedzStudentaManager;
import com.example.demo.services.PytanieManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/pytania")
public class PytanieApi {
    @Autowired
    private PytanieManager pytanieManager;

    @Autowired
    private PytanieRepository pytanieRepository;

    @GetMapping(value = "/{pytanieId}")
    public Optional<Pytanie> findById(@RequestParam Long loginId) {
        return pytanieRepository.findById(loginId);
    }

    @GetMapping
    public List<Pytanie> findAll(){
        return pytanieRepository.findAll();
    }

    @PostMapping
    public Pytanie savePytanie(@RequestBody Pytanie pytanie){
        return pytanieRepository.save(pytanie);
    }

    @PutMapping
    public Pytanie updatePytanie(@RequestBody Pytanie pytanie){
        Optional<Pytanie> newPytanie = pytanieRepository.findById(pytanie.getId());
        newPytanie.ifPresent(($) -> {
            $.setTest(pytanie.getTest());
            $.setTresc(pytanie.getTresc());
            pytanieRepository.save($);
        });
        return newPytanie.get();
    }

    @DeleteMapping
    public void deletePytanie(@RequestBody Pytanie pytanie){
        pytanieRepository.delete(pytanie);
    }
}
