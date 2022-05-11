package com.example.demo.api;

import com.example.demo.model.Pytanie;
import com.example.demo.model.RozwiazanyTest;
import com.example.demo.services.PytanieManager;
import com.example.demo.services.RozwiazanyTestManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/api/rozwiazanytest")
public class RozwiazanyTestApi {
    private RozwiazanyTestManager rozwiazanyTestManager;

    @Autowired
    public RozwiazanyTestApi(RozwiazanyTestManager rozwiazanyTestManager) {
        this.rozwiazanyTestManager = rozwiazanyTestManager;
    }

    @GetMapping("/id")
    public Optional<RozwiazanyTest> getById(@RequestParam Long index) {
        return rozwiazanyTestManager.findById(index);
    }

    @GetMapping(value = "/{rozwiazantTestId}")
    public Optional<RozwiazanyTest> getId(@PathVariable("rozwiazantTestId") Long loginId) {
        return rozwiazanyTestManager.findById(loginId);
    }
}
