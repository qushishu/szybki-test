package com.example.demo.api;

import com.example.demo.model.Odpowiedz;
import com.example.demo.model.OdpowiedzStudenta;
import com.example.demo.services.OdpowiedzManager;
import com.example.demo.services.OdpowiedzStudentaManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/api/odpowiedzstudenta")
public class OdpowiedzStudentaApi {
    private OdpowiedzStudentaManager odpowiedzStudentaManager;

    @Autowired
    public OdpowiedzStudentaApi(OdpowiedzStudentaManager odpowiedzStudentaManager) {
        this.odpowiedzStudentaManager = odpowiedzStudentaManager;
    }

    @GetMapping("/id")
    public Optional<OdpowiedzStudenta> getById(@RequestParam Long index) {
        return odpowiedzStudentaManager.findById(index);
    }

    @GetMapping(value = "/{odpowiedzStudentaId}")
    public Optional<OdpowiedzStudenta> getId(@PathVariable("odpowiedzStudentaId") Long loginId) {
        return odpowiedzStudentaManager.findById(loginId);
    }
}
