package com.treinadev.api.enums;

public enum Meses {

    Janeiro("Janeiro"),
    Fevereiro("Fevereiro"),
    Marco("Março"),
    Abril("Abril"),
    Maio("Maio"),
    Junho("Junho"),
    Julho("Julho"),
    Agosto("Agosto"),
    Setembro("Setembro"),
    Outubro("Outubro"),
    Novembro("Novembro"),
    Dezembro("Dezembro");

    private String meses;

    private Meses(String meses) {
        this.meses = meses;
    }

    public String getMeses() {
        return this.meses;
    }
    
}
