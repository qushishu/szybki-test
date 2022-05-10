package com.example.demo.model;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import javax.persistence.*;

@Entity
@Table(name = "rozwiazany_test")
@Data
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@AllArgsConstructor
@SuperBuilder
public class RozwiazanyTest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "rozwiazany_test_id", unique = true, nullable = false)
    private Long id;
    @Column(nullable = false, unique = true)
    private String indeks;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "test_id", nullable = false)
    private Test test;
}
