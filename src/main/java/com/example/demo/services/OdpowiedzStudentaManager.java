package com.example.demo.services;

import com.example.demo.model.OdpowiedzStudenta;
import com.example.demo.repository.OdpowiedzStudentaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class OdpowiedzStudentaManager {
    private final OdpowiedzStudentaRepository odpowiedzStudentaRepository;

    @Autowired
    public OdpowiedzStudentaManager(OdpowiedzStudentaRepository odpowiedzStudentaRepository) {
        super();
        this.odpowiedzStudentaRepository = odpowiedzStudentaRepository;
    }

    public Optional<OdpowiedzStudenta> findById(Long id) {
        return odpowiedzStudentaRepository.findById(id);
    }
}
