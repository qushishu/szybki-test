package com.example.demo.services;

import com.example.demo.model.RozwiazanyTest;
import com.example.demo.model.Test;
import com.example.demo.repository.RozwiazanyTestRepository;
import com.example.demo.repository.TestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class TestManager {
    private final TestRepository testRepository;

    @Autowired
    public TestManager(TestRepository testRepository) {
        super();
        this.testRepository = testRepository;
    }

    public Optional<Test> findById(Long id) {
        return testRepository.findById(id);
    }

    public List<Test> getTestByNauczycielId(Long nauczycielId){
        return testRepository.findAll().stream()
                .filter($ -> $.getNauczyciel().getId().equals(nauczycielId))
                .collect(Collectors.toList());
    }
}
