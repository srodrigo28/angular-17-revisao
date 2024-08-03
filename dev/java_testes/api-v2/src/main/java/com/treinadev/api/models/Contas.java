package com.treinadev.api.models;

import java.math.BigDecimal;
import java.time.Instant;

import com.treinadev.api.enums.TipoConta;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity(name = "conta")
public class Contas {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;

    private String descricao;

    private TipoConta tipo;

    private BigDecimal valor;

    private Instant dataVencimento;
    
}
