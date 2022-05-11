package com.example.demo.services;

import com.example.demo.model.Odpowiedz;
import com.example.demo.repository.OdpowiedzRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

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
}
