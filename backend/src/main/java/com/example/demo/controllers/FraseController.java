package com.example.demo.controllers;

import com.example.demo.dtos.FraseDto;
import com.example.demo.services.FraseService;

import java.io.IOException;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/frase")
public class FraseController {
    @Autowired
    // Inyección del servicio de la clase DietaService
    private FraseService fraseService;

    // Mapeo del endpoint /dieta
    @GetMapping("/data")
    public ResponseEntity<List<FraseDto>> getDieta() throws IOException {
        // Se llama al método retrieveDieta() del servicio
        List<FraseDto> fraseData = fraseService.retrieveFrase();
        // Se devuelve el resultado de la llamada al servicio
        return new ResponseEntity<>(fraseData, HttpStatus.OK);
    }
}
