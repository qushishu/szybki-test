package com.example.demo.services;

import com.example.demo.model.Pytanie;
import com.example.demo.repository.PytanieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

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

    public List<Pytanie> getPytanieByTestId(Long testId){
        return pytanieRepository.findAll().stream()
                .filter($ -> $.getTest().getId().equals(testId))
                .collect(Collectors.toList());
    }
}
