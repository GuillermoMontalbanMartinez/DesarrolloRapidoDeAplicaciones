package com.example.demo.services;

import com.example.demo.dtos.FraseDto;
import java.util.ArrayList;
import java.util.List;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.springframework.stereotype.Component;



// Anotación del componente
@Component("fraseService") // (1)
public class FraseService {
    /**
     * Método que devuelve una lista de frases
     * 1=> Anotación del componente
     * 2 => Conexión con la web
     * 3 => Selección de la etiqueta <blockquote> y se obtiene el texto de la frase y el autor de la frase (si existe)
     * @return Lista de frases
     */
    public List<FraseDto> retrieveFrase() {
        List<FraseDto> frases = new ArrayList<>();

        try {
            Document webPage = Jsoup.connect("https://www.axahealthkeeper.com/blog/las-50-mejores-frases-para-motivarse-a-no-dejar-de-hacer-deporte/").get();
            Element ol = webPage.getElementsByTag("ol").get(0);
                
            for (Element li : ol.getElementsByTag("li")) {
                frases.add(new FraseDto(li.text()));
            }
            return frases;
        } catch (Exception e) {
             e.printStackTrace();
        }

        return null;
    }

    }
