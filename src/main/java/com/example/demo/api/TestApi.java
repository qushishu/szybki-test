package com.example.demo.api;

import com.example.demo.model.RozwiazanyTest;
import com.example.demo.model.Test;
import com.example.demo.services.RozwiazanyTestManager;
import com.example.demo.services.TestManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/api/test")
public class TestApi {
    private TestManager testManager;

    @Autowired
    public TestApi(TestManager testManager) {
        this.testManager = testManager;
    }

    @GetMapping("/id")
    public Optional<Test> getById(@RequestParam Long index) {
        return testManager.findById(index);
    }

    @GetMapping(value = "/{testId}")
    public Optional<Test> getId(@PathVariable("testId") Long loginId) {
        return testManager.findById(loginId);
    }
}
