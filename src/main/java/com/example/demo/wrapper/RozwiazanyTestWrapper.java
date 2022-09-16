package com.example.demo.wrapper;

import lombok.AllArgsConstructor;
import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
public class RozwiazanyTestWrapper {
    @NotBlank
    private Long id;
    @NotBlank
    private String indeks;
    @NotBlank
    private Long test_id;
}
