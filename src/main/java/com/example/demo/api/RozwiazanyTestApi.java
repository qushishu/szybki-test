package com.example.demo.api;

import com.example.demo.model.RozwiazanyTest;
import com.example.demo.model.Test;
import com.example.demo.repository.RozwiazanyTestRepository;
import com.example.demo.repository.TestRepository;
import com.example.demo.services.RozwiazanyTestManager;
import com.example.demo.wrapper.RozwiazanyTestIdNazwa;
import com.example.demo.wrapper.RozwiazanyTestWrapper;
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

    @Autowired
    private TestRepository testRepository;

    @GetMapping(value = "/{rozwiazanyTestId}")
    public Optional<RozwiazanyTest> findById(@RequestParam Long loginId) {
        return rozwiazanyTestRepository.findById(loginId);
    }

    @GetMapping
    public List<RozwiazanyTest> findAll(){
        return rozwiazanyTestRepository.findAll();
    }

    @GetMapping(value = "/nazwa-id")
    public List<RozwiazanyTestIdNazwa> findRozwiazanyTestIdNazwa(@RequestParam Long teacherId) {
        return rozwiazanyTestManager.getAllRozwiazanyTestIdNazwa(teacherId);
    }

//    @GetMapping(value = "/tests-for-teacher")
//    public List<Long> findTestsForTeacher(@RequestParam Long teacherId) {
//
//    }

    @PostMapping
    public RozwiazanyTest saveRozwiazanyTest(@RequestBody RozwiazanyTestWrapper rozwiazanyTest){
        Test test = testRepository.findById(rozwiazanyTest.getTest_id()).orElseThrow();
        RozwiazanyTest rT = RozwiazanyTest.builder()
                .id(rozwiazanyTest.getId())
                .indeks(rozwiazanyTest.getIndeks())
                .test(test)
                .build();
        return rozwiazanyTestRepository.save(rT);
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
