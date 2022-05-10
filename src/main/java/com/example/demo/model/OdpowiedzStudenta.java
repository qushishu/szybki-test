package com.example.demo.model;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;
import org.springframework.boot.autoconfigure.condition.ConditionalOnJava;

import javax.persistence.*;

@Entity
@Table(name = "odpowiedz_studenta")
@Data
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@AllArgsConstructor
@SuperBuilder
public class OdpowiedzStudenta {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "odpowiedz_studenta_id", unique = true, nullable = false)
    private Long id;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "odpowiedz_id", nullable = false)
    private Odpowiedz odpowiedz;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "rozwiazany_test_id", nullable = false)
    private RozwiazanyTest rozwiazanyTest;
}
