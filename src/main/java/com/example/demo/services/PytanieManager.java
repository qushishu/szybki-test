package com.example.demo.services;

import com.example.demo.model.OdpowiedzStudenta;
import com.example.demo.model.Pytanie;
import com.example.demo.repository.PytanieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class PytanieManager {
    private final PytanieRepository pytanieRepository;

    @Autowired
    public PytanieManager(PytanieRepository pytanieRepository) {
        super();
        this.pytanieRepository = pytanieRepository;
    }

    public Optional<Pytanie> findById(Long id) {
        return pytanieRepository.findById(id);
    }
}
