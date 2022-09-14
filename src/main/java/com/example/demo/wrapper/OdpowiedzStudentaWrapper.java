package com.example.demo.wrapper;

import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
public class OdpowiedzStudentaWrapper {
    @NotBlank
    private Long id;
    @NotBlank
    private Long odpowiedz_id;
    @NotBlank
    private Long rozwiazany_test_id;
}
