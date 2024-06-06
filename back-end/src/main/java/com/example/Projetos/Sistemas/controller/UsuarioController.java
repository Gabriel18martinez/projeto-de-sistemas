package com.example.Projetos.Sistemas.controller;


import com.example.Projetos.Sistemas.controller.request.LoginRequest;
import com.example.Projetos.Sistemas.model.Marca;
import com.example.Projetos.Sistemas.model.Usuario;
import com.example.Projetos.Sistemas.repository.CarroRepository;
import com.example.Projetos.Sistemas.repository.UsuarioRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/usuario")
public class UsuarioController {

    @Autowired
    private UsuarioRepository repository;

    @Autowired
    private CarroRepository carroRepository;


    @PostMapping
    public ResponseEntity<Usuario> criar(@Valid @RequestBody Usuario usuario) {

        if (this.repository.findUsuarioByEmail(usuario.getEmail()).isPresent()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        this.repository.save(usuario);

        return new ResponseEntity<>(usuario, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<Usuario> obter(@PathVariable("id") UUID id) {
        return this.repository.findById(id).map(usuario -> {
            return new ResponseEntity<>(usuario, HttpStatus.OK);
        }).orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping
    public ResponseEntity<List<Usuario>> obterUsuarios() {
        return new ResponseEntity<>(this.repository.findAll(), HttpStatus.OK) ;
    }

    @PostMapping("/login")
    public ResponseEntity<Usuario> login(@Valid @RequestBody LoginRequest request) {
        Optional<Usuario> optUsuario = this.repository.findUsuarioByEmailAndSenha(request.getEmail(), request.getSenha());

        return optUsuario.map(usuario -> {
            return new ResponseEntity<>(usuario, HttpStatus.OK);
        }).orElse(new ResponseEntity<>(HttpStatus.UNAUTHORIZED));
    }


}
