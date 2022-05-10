package com.example.demo.model;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import javax.persistence.*;

@Entity
@Table(name = "odpowiedz")
@Data
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@AllArgsConstructor
@SuperBuilder
public class Odpowiedz {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "odpowiedz_id", unique = true, nullable = false)
    private Long id;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "pytanie_id", nullable = false)
    private Pytanie pytanie;
    @Column(nullable = false)
    private String tresc;
    private boolean czyPoprawna;
}
