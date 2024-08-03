package com.treinadev.api.models;

import java.time.Instant;

import org.hibernate.annotations.CreationTimestamp;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.DateTimeFormat.ISO;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import lombok.Data;

@Data
@Entity(name = "cliente")
public class Cliente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column( unique = true, nullable = false)
    private String nome;

    @Column(nullable = false)
    @CreationTimestamp
    @DateTimeFormat( iso = ISO.DATE )
    private Instant dataNasc;

    @Column(nullable = false)
    private String sexo;

    @Column(nullable = false)
    private String Telefone;

    @CreationTimestamp
    @DateTimeFormat(iso = ISO.DATE)
    private Instant dataCadastro;

    @CreationTimestamp
    @DateTimeFormat(iso = ISO.DATE)
    private Instant dataAtualizacao;

    // relacionamento
    @OneToOne(optional = false, cascade = CascadeType.PERSIST) // a colocar o endereço
    private Endereco endereco;
    
}
