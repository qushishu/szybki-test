package com.example.demo.api;

import com.example.demo.model.Odpowiedz;
import com.example.demo.model.OdpowiedzStudenta;
import com.example.demo.model.RozwiazanyTest;
import com.example.demo.repository.OdpowiedzRepository;
import com.example.demo.repository.OdpowiedzStudentaRepository;
import com.example.demo.repository.RozwiazanyTestRepository;
import com.example.demo.services.OdpowiedzStudentaManager;
import com.example.demo.wrapper.OdpowiedzStudentaWrapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/odpowiedzistudentow")
public class OdpowiedzStudentaApi {
    @Autowired
    private OdpowiedzStudentaManager odpowiedzStudentaManager;

    @Autowired
    private OdpowiedzStudentaRepository odpowiedzStudentaRepository;

    @Autowired
    private OdpowiedzRepository odpowiedzRepository;

    @Autowired
    private RozwiazanyTestRepository rozwiazanyTestRepository;

    @GetMapping(value = "/{odpowiedzStudentaId}")
    public Optional<OdpowiedzStudenta> findById(@RequestParam Long loginId) {
        return odpowiedzStudentaRepository.findById(loginId);
    }

    @GetMapping
    public List<OdpowiedzStudenta> findAll(){
        return odpowiedzStudentaRepository.findAll();
    }

    @PostMapping
    public OdpowiedzStudenta saveOdpowiedzStudenta(@RequestBody OdpowiedzStudentaWrapper odpowiedzStudenta){
        Odpowiedz odpowiedz = odpowiedzRepository.getById(odpowiedzStudenta.getOdpowiedz_id());
        RozwiazanyTest rozwiazanyTest = rozwiazanyTestRepository.getById(odpowiedzStudenta.getRozwiazany_test_id());
        OdpowiedzStudenta odp = OdpowiedzStudenta.builder()
                .odpowiedz(odpowiedz)
                .rozwiazanyTest(rozwiazanyTest)
                .build();
        return odpowiedzStudentaRepository.save(odp);
    }

    @PutMapping
    public OdpowiedzStudenta updateOdpowiedzStudenta(@RequestBody OdpowiedzStudenta odpowiedzStudenta){
        Optional<OdpowiedzStudenta> newOdpowiedz = odpowiedzStudentaRepository.findById(odpowiedzStudenta.getId());
        newOdpowiedz.ifPresent(($) -> {
            $.setOdpowiedz(odpowiedzStudenta.getOdpowiedz());
            $.setRozwiazanyTest(odpowiedzStudenta.getRozwiazanyTest());
            odpowiedzStudentaRepository.save($);
        });
        return newOdpowiedz.get();
    }

    @DeleteMapping
    public void deleteOdpowiedzStudenta(@RequestBody OdpowiedzStudenta odpowiedz){
        odpowiedzStudentaRepository.delete(odpowiedz);
    }
}
