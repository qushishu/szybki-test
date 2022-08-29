package com.example.demo.services;

import com.example.demo.model.Odpowiedz;
import com.example.demo.repository.OdpowiedzRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class OdpowiedzManager {
    private final OdpowiedzRepository odpowiedzRepository;

    @Autowired
    public OdpowiedzManager(OdpowiedzRepository odpowiedzRepository) {
        super();
        this.odpowiedzRepository = odpowiedzRepository;
    }

    public Optional<Odpowiedz> findById(Long id) {
        return odpowiedzRepository.findById(id);
    }
    public List<Odpowiedz> getOdpowiedziByPytanieId(Long pytanieId){
        return odpowiedzRepository.findAll().stream()
                .filter($ -> $.getPytanie().getId().equals(pytanieId))
                .collect(Collectors.toList());
    }
}
