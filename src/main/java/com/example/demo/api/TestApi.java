package com.example.demo.api;

import com.example.demo.model.*;
import com.example.demo.repository.NauczycielRepository;
import com.example.demo.repository.TestRepository;
import com.example.demo.services.TestManager;
import com.example.demo.wrapper.TestWrapper;
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

    @Autowired
    private NauczycielRepository nauczycielRepository;

    @GetMapping(value = "/{testId}")
    public Optional<Test> findById(@RequestParam Long loginId) {
        return testRepository.findById(loginId);
    }

    @GetMapping
    public List<Test> findAll(){
        return testRepository.findAll();
    }

    @PostMapping
    public Test saveTest(@RequestBody TestWrapper testWrapper){
        Nauczyciel nauczyciel = nauczycielRepository.findById(testWrapper.getNauczycielId()).orElseThrow();
        Test test = Test.builder()
                .nauczyciel(nauczyciel)
                .czasTrwania(testWrapper.getCzasTrwania())
                .dataUruchomienia(testWrapper.getDataUruchomienia())
                .dataZakonczenia(testWrapper.getDataZakonczenia())
                .nazwa(testWrapper.getNazwa())
                .token(testWrapper.getToken())
                .build();
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

    @DeleteMapping(value = "/testId")
    public void deleteTest(@RequestParam Long id){
        testRepository.deleteById(id);
    }

    @GetMapping(path = "/donauczyciela")
    public List<Test> getTestByNauczycielId(@RequestParam Long nauczycielId){
        return testManager.getTestByNauczycielId(nauczycielId);
    }
}
