package com.example.demo.services;

import com.example.demo.model.Pytanie;
import com.example.demo.model.RozwiazanyTest;
import com.example.demo.model.Test;
import com.example.demo.repository.PytanieRepository;
import com.example.demo.repository.RozwiazanyTestRepository;
import com.example.demo.repository.TestRepository;
import com.example.demo.wrapper.RozwiazanyTestIdNazwa;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class RozwiazanyTestManager {
    private final RozwiazanyTestRepository rozwiazanyTestRepository;

    private final TestRepository testRepository;

    @Autowired
    public RozwiazanyTestManager(RozwiazanyTestRepository rozwiazanyTestRepository, TestRepository testRepository) {
        super();
        this.rozwiazanyTestRepository = rozwiazanyTestRepository;
        this.testRepository = testRepository;
    }

    public Optional<RozwiazanyTest> findById(Long id) {
        return rozwiazanyTestRepository.findById(id);
    }

    public List<RozwiazanyTestIdNazwa> getAllRozwiazanyTestIdNazwa(Long teacherId) {
        Set<Long> rozwiazanyTestId = rozwiazanyTestRepository.findAll().stream().map(RozwiazanyTest::getId).collect(Collectors.toSet());
        List<RozwiazanyTestIdNazwa> rozwiazanyTestIdNazwas = new ArrayList<>();
        for (Long id: rozwiazanyTestId) {
            Test test = testRepository.getById(id);
            if (test.getNauczyciel().getId().equals(teacherId)) {
                RozwiazanyTestIdNazwa rozwiazanyTestIdNazwa = RozwiazanyTestIdNazwa.builder()
                        .Id(id)
                        .nazwa(test.getNazwa())
                        .build();
                rozwiazanyTestIdNazwas.add(rozwiazanyTestIdNazwa);
            }
        }
        return rozwiazanyTestIdNazwas;
    }
}
