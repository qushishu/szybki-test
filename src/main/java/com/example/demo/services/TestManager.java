package com.example.demo.services;

import com.example.demo.model.RozwiazanyTest;
import com.example.demo.model.Test;
import com.example.demo.repository.RozwiazanyTestRepository;
import com.example.demo.repository.TestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

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
}
