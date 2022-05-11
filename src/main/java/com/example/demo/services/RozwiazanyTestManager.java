package com.example.demo.services;

import com.example.demo.model.Pytanie;
import com.example.demo.model.RozwiazanyTest;
import com.example.demo.repository.PytanieRepository;
import com.example.demo.repository.RozwiazanyTestRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class RozwiazanyTestManager {
    private final RozwiazanyTestRepository rozwiazanyTestRepository;

    public RozwiazanyTestManager(RozwiazanyTestRepository rozwiazanyTestRepository) {
        super();
        this.rozwiazanyTestRepository = rozwiazanyTestRepository;
    }

    public Optional<RozwiazanyTest> findById(Long id) {
        return rozwiazanyTestRepository.findById(id);
    }
}
