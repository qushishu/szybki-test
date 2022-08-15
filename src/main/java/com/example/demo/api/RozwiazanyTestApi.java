package com.example.demo.api;

import com.example.demo.model.Pytanie;
import com.example.demo.model.RozwiazanyTest;
import com.example.demo.repository.RozwiazanyTestRepository;
import com.example.demo.services.PytanieManager;
import com.example.demo.services.RozwiazanyTestManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/rozwiazanetesty")
public class RozwiazanyTestApi {
    @Autowired
    private RozwiazanyTestManager rozwiazanyTestManager;

    @Autowired
    private RozwiazanyTestRepository rozwiazanyTestRepository;

    @GetMapping(value = "/{rozwiazanyTestId}")
    public Optional<RozwiazanyTest> findById(@RequestParam Long loginId) {
        return rozwiazanyTestRepository.findById(loginId);
    }

    @GetMapping
    public List<RozwiazanyTest> findAll(){
        return rozwiazanyTestRepository.findAll();
    }

    @PostMapping
    public RozwiazanyTest saveRozwiazanyTest(@RequestBody RozwiazanyTest rozwiazanyTest){
        return rozwiazanyTestRepository.save(rozwiazanyTest);
    }

    @PutMapping
    public RozwiazanyTest updateRozwiazanyTest(@RequestBody RozwiazanyTest rozwiazanyTest){
        Optional<RozwiazanyTest> newRozwiazanyTest = rozwiazanyTestRepository.findById(rozwiazanyTest.getId());
        newRozwiazanyTest.ifPresent(($) -> {
            $.setTest(rozwiazanyTest.getTest());
            $.setIndeks(rozwiazanyTest.getIndeks());
            rozwiazanyTestRepository.save($);
        });
        return newRozwiazanyTest.get();
    }

    @DeleteMapping
    public void deleteRozwiazanyTest(@RequestBody RozwiazanyTest rozwiazanyTest){
        rozwiazanyTestRepository.delete(rozwiazanyTest);
    }
}
