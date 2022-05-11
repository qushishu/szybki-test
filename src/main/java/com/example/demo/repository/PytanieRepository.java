package com.example.demo.repository;

import com.example.demo.model.Pytanie;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PytanieRepository extends JpaRepository<Pytanie, Long> {
}
