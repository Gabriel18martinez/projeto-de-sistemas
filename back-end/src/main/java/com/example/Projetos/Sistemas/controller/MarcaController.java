package com.example.Projetos.Sistemas.controller;


import com.example.Projetos.Sistemas.controller.request.CarroRequest;
import com.example.Projetos.Sistemas.controller.request.MarcaRequest;
import com.example.Projetos.Sistemas.model.Carro;
import com.example.Projetos.Sistemas.model.Marca;
import com.example.Projetos.Sistemas.repository.CarroRepository;
import com.example.Projetos.Sistemas.repository.MarcaRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/marca")
public class MarcaController {
    @Autowired
    private MarcaRepository repository;

    @Autowired
    private CarroRepository carroRepository;

    @PostMapping
    public ResponseEntity<Marca> criar(@Valid @RequestBody MarcaRequest request) throws Exception {

        Marca marca = new Marca();
        marca.setNome(request.getNome());

        //Salva no banco de dados a marca
        this.repository.save(marca);

        //Verificar se o usuário enviou carros
        for (CarroRequest item : request.getCarros()) {
            Carro carro = new Carro();
            carro.setId(UUID.randomUUID());
            carro.setNome(item.getNome());
            carro.setDescricao(item.getDescricao());
            carro.setPreco(item.getPreco());
            carro.setImagem(item.getImagem());

            carro.setMarca(marca);

            //Associa a marca ao carro
            marca.getCarros().add(carro);

            //Salva no banco de dados
            this.carroRepository.save(carro);

        }
        return new ResponseEntity<>(marca, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<Marca> obter(@PathVariable("id") UUID id) {
        return  this.repository.findById(id).map(item -> {
            return new ResponseEntity<>(item, HttpStatus.OK);
        }).orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping("/carros")
    public ResponseEntity<List<Carro>> obterCarros() {
        return new ResponseEntity<>(this.carroRepository.findAll(), HttpStatus.OK);
    }


    @PostMapping("{id}/carro")
    public ResponseEntity<Marca> associarCarro(@PathVariable("id") UUID id, @Valid @RequestBody CarroRequest request) throws Exception {
        Optional<Marca> optMarca = this.repository.findById(id);

        if (optMarca.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        //Hibernate Optional -> Se ele achou, obtenho a instancia
        Marca marca = optMarca.get();

        //Cria uma nova instancia de carro para salvar
        Carro carro = new Carro();
        carro.setNome(request.getNome());
        carro.setDescricao(request.getDescricao());
        carro.setPreco(request.getPreco());
        carro.setImagem(request.getImagem());

        carro.setMarca(marca);
        marca.getCarros().add(carro);

        //Salva o carro e associa a marca
        this.carroRepository.save(carro);


        //Responde para o usuário
        return new ResponseEntity<>(marca, HttpStatus.CREATED);
    }


    @GetMapping
    public ResponseEntity<List<Marca>> obterMarcar() {
        return new ResponseEntity<>(this.repository.findAll(), HttpStatus.OK) ;
    }


}
