package com.treinadev.api.models;

import com.treinadev.api.enums.EnderecoUF;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity(name = "endereco")
public class Endereco {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 20)
    private String cep;

    @Column(nullable = false, length = 2) // importante só guardar 2 caracteres
    @Enumerated(EnumType.STRING) // pode usar Ordinal seria um numero
    private EnderecoUF Estado;
    
    @Column(nullable = false)
    private String cidade;

    @Column(nullable = false)
    private String bairro;

    @Column(nullable = false)
    private String rua;

    @Column(nullable = false)
    private String complemento;
}
