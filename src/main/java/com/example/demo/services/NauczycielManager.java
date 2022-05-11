package com.example.demo.services;

import com.example.demo.model.Nauczyciel;
import com.example.demo.repository.NauczycielRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class NauczycielManager {
    private final NauczycielRepository nauczycielRepository;

    @Autowired
    public NauczycielManager(NauczycielRepository nauczycielRepository) {
        super();
        this.nauczycielRepository = nauczycielRepository;
    }

    public Optional<Nauczyciel> findById(Long id) {
        return nauczycielRepository.findById(id);
    }
}
