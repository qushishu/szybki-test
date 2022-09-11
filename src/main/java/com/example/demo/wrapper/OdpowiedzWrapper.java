package com.example.demo.wrapper;

import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
public class OdpowiedzWrapper {
    @NotBlank
    private final Long id;

    @NotBlank
    private final String tresc;

    @NotBlank
    private final boolean czyPoprawna;

    @NotBlank
    private final Long pytanieId;
}
