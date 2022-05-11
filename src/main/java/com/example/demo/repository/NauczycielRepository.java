package com.example.demo.repository;

import com.example.demo.model.Nauczyciel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NauczycielRepository extends JpaRepository<Nauczyciel, Long> {
}
