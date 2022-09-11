package com.example.demo.api;

import com.example.demo.model.Nauczyciel;
import com.example.demo.repository.NauczycielRepository;
import com.example.demo.services.NauczycielManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/nauczyciele")
public class NauczycielApi {
    @Autowired
    private NauczycielManager nauczycielManager;

    @Autowired
    private NauczycielRepository nauczycielRepository;

    @GetMapping(value = "/{nauczycielId}")
    public Optional<Nauczyciel> findById(@RequestParam Long loginId) {
        return nauczycielRepository.findById(loginId);
    }

    @GetMapping
    public List<Nauczyciel> findAll(){
        return nauczycielRepository.findAll();
    }

    @PostMapping
    public Nauczyciel saveNauczyciel(@RequestBody Nauczyciel nauczyciel){
        return nauczycielRepository.save(nauczyciel);
    }

    @PutMapping
    public  Nauczyciel updateNauczyciel(@RequestBody Nauczyciel nauczyciel){
        Optional<Nauczyciel> newNauczyciel = nauczycielRepository.findById(nauczyciel.getId());
        newNauczyciel.ifPresent(($) -> {
            $.setName(nauczyciel.getName());
            $.setSurname(nauczyciel.getSurname());
            nauczycielRepository.save($);
        });
        return newNauczyciel.get();
    }

    @DeleteMapping
    public void deleteNauczyciel(@RequestBody Nauczyciel nauczyciel){
        nauczycielRepository.delete(nauczyciel);
    }
}
