package com.example.demo.api;

import com.example.demo.model.RozwiazanyTest;
import com.example.demo.model.Test;
import com.example.demo.repository.TestRepository;
import com.example.demo.services.RozwiazanyTestManager;
import com.example.demo.services.TestManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/testy")
public class TestApi {
    @Autowired
    private TestManager testManager;

    @Autowired
    private TestRepository testRepository;

    @GetMapping(value = "/{testId}")
    public Optional<Test> findById(@RequestParam Long loginId) {
        return testRepository.findById(loginId);
    }

    @GetMapping
    public List<Test> findAll(){
        return testRepository.findAll();
    }

    @PostMapping
    public Test saveTest(@RequestBody Test test){
        return testRepository.save(test);
    }

    @PutMapping
    public Test updateTest(@RequestBody Test test){
        Optional<Test> newTest = testRepository.findById(test.getId());
        newTest.ifPresent(($) -> {
            $.setCzasTrwania(test.getCzasTrwania());
            $.setDataUruchomienia(test.getDataUruchomienia());
            $.setDataZakonczenia(test.getDataZakonczenia());
            $.setNazwa(test.getNazwa());
            $.setToken(test.getToken());
            $.setNauczyciel(test.getNauczyciel());
            testRepository.save($);
        });
        return newTest.get();
    }

    @DeleteMapping
    public void deleteTest(@RequestBody Test test){
        testRepository.delete(test);
    }

    @GetMapping(path = "/donauczyciela")
    public List<Test> getTestByNauczycielId(@RequestParam Long nauczycielId){
        return testManager.getTestByNauczycielId(nauczycielId);
    }
}
