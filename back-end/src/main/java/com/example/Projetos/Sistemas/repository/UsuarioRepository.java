package com.example.Projetos.Sistemas.repository;

import com.example.Projetos.Sistemas.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, UUID> {
    Optional<Usuario> findUsuarioByEmail(String email);
    Optional<Usuario> findUsuarioByEmailAndSenha(String email, String senha);
}
