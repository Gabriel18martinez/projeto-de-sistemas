package com.example.Projetos.Sistemas.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Data
@Entity
public class Marca {

    public Marca() {
        this.carros = new ArrayList<>();
    }

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column
    private String nome;

    @OneToMany
    @JoinColumn(name = "marca_id", referencedColumnName = "id")
    private List<Carro> carros;
}