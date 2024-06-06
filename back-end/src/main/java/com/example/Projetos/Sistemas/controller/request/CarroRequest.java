package com.example.Projetos.Sistemas.controller.request;

import lombok.Data;

import java.util.UUID;

@Data
public class CarroRequest {
    private UUID id;
    private String nome;
    private String descricao;
    private Float preco;
    private String imagem;
}
