package com.example.demo.model;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "test")
@Data
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@AllArgsConstructor
@SuperBuilder
public class Test {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "test_id", unique = true, nullable = false)
    private Long id;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "nauczyciel_id", nullable = false)
    private Nauczyciel nauczyciel;
    @Column(nullable = false, unique = true)
    private String token;
    @Column(nullable = false)
    private String nazwa;
    @Column(nullable = false)
    private Date dataUruchomienia;
    @Column(nullable = false)
    private Date dataZakonczenia;
    @Column(nullable = false)
    private Date czasTrwania;
}
