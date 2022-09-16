package com.example.demo.wrapper;

import lombok.Data;
import lombok.experimental.SuperBuilder;

import javax.validation.constraints.NotBlank;

@Data
@SuperBuilder
public class RozwiazanyTestIdNazwa {
    @NotBlank
    private Long Id;
    @NotBlank
    private String nazwa;
}
