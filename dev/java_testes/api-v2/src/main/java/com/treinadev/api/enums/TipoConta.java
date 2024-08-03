package com.treinadev.api.enums;

public enum TipoConta {

    Apagar("Saídas"),
    Receber("Entradas");

    private String descricao;

    private TipoConta(String descricao) {
        this.descricao = descricao;
    }

    public String getDescricao(){
        return this.descricao;
    }
}
