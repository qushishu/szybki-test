package com.example.demo.wrapper;

import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
public class PytanieWrapper {
    @NotBlank
    private Long id;
    @NotBlank
    private Long testId;
    @NotBlank
    private String tresc;
}
