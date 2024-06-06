package com.example.Projetos.Sistemas.controller.request;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

import java.util.List;
import java.util.UUID;

@Data
public class MarcaRequest {

    private UUID id;

    @NotBlank(message = "Campo nome é obrigatório")
    private String nome;

    private List<CarroRequest> carros;
}
