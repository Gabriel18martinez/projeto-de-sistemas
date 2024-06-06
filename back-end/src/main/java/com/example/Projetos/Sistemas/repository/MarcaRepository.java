package com.example.Projetos.Sistemas.repository;

import com.example.Projetos.Sistemas.model.Marca;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface MarcaRepository extends JpaRepository<Marca, UUID> {
}
