package com.example.demo.api;

import com.example.demo.model.OdpowiedzStudenta;
import com.example.demo.repository.OdpowiedzStudentaRepository;
import com.example.demo.services.OdpowiedzStudentaManager;
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

    @GetMapping(value = "/{odpowiedzStudentaId}")
    public Optional<OdpowiedzStudenta> findById(@RequestParam Long loginId) {
        return odpowiedzStudentaRepository.findById(loginId);
    }

    @GetMapping
    public List<OdpowiedzStudenta> findAll(){
        return odpowiedzStudentaRepository.findAll();
    }

    @PostMapping
    public OdpowiedzStudenta saveOdpowiedzStudenta(@RequestBody OdpowiedzStudenta odpowiedzStudenta){
        return odpowiedzStudentaRepository.save(odpowiedzStudenta);
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
