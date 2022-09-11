package com.example.demo.wrapper;

import lombok.Data;

import javax.validation.constraints.NotBlank;
import java.util.Date;

@Data
public class TestWrapper {
    @NotBlank
    private Long id;
    @NotBlank
    private Long nauczycielId;
    @NotBlank
    private String token;
    @NotBlank
    private String nazwa;
    @NotBlank
    private Date dataUruchomienia;
    @NotBlank
    private Date dataZakonczenia;
    @NotBlank
    private Date czasTrwania;
}
