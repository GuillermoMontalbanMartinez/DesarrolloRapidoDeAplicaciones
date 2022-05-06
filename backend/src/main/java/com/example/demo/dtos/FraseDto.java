package com.example.demo.dtos;

public class FraseDto {
    public String frase;

    public FraseDto() {
    }

    public FraseDto(String frase) {
        this.frase = frase;
    }

    public String getFrase() {
        return frase;
    }

    public void setFrase(String frase) {
        this.frase = frase;
    }

    @Override
    public String toString() {
        return "FraseDto{" +
                "frase='" + frase + '\'' +
                '}';
    }
}
