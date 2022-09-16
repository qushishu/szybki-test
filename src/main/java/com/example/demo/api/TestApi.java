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
                .czyAktywny(testWrapper.isCzyAktywny())
                .build();
        return testRepository.save(test);
    }

    @PutMapping
    public Test updateTest(@RequestBody TestWrapper testWrapper){
        Optional<Test> newTest = testRepository.findById(testWrapper.getId());
        newTest.ifPresent(($) -> {
            $.setCzasTrwania(testWrapper.getCzasTrwania());
            $.setDataUruchomienia(testWrapper.getDataUruchomienia());
            $.setDataZakonczenia(testWrapper.getDataZakonczenia());
            $.setNazwa(testWrapper.getNazwa());
            $.setToken(testWrapper.getToken());
            $.setCzyAktywny(testWrapper.isCzyAktywny());
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
