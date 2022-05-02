package com.example.demo.dtos;

public class FraseDto {
    public String frase;
    public String autor;

    public FraseDto() {
    }

    public FraseDto(String frase, String autor) {
        this.frase = frase;
        this.autor = autor;
    }

    public FraseDto(String frase) {
        this.frase = frase;
        this.autor = "anonimo";
    }

    public String getFrase() {
        return frase;
    }

    public void setFrase(String frase) {
        this.frase = frase;
    }

    public String getAutor() {
        return autor;
    }

    public void setAutor(String autor) {
        this.autor = autor;
    }

    @Override
    public String toString() {
        return "FraseDto{" +
                "frase='" + frase + '\'' +
                ", autor='" + autor + '\'' +
                '}';
    }
}
