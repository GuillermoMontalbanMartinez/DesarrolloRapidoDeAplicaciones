package com.example.demo.services;

import com.example.demo.dtos.FraseDto;
import com.microsoft.playwright.Browser;
import com.microsoft.playwright.Page;
import com.microsoft.playwright.Playwright;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
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
    public List<FraseDto> retrieveFrase() throws IOException {
        List<FraseDto> fraseData = new ArrayList<>();

        Playwright playwright = Playwright.create();
        Browser browser = playwright.webkit().launch();
        Page page = browser.newPage();
        page.navigate("https://www.iebschool.com/blog/50-frases-motivadoras-para-emprendedores-creacion-empresas/");
        page.waitForSelector("#post-24110 > div.content-body > div > div.entry-content > blockquote:nth-child(51)"); //(2) Esperamos que se cargue el selector último de la página
        //Document webPage = Jsoup.connect("https://controlyperspectiva.com/2020/02/frases-estoicas-para-mejorar-tu-efectividad.html").get(); // (2)
        // Element blockquote = webPage.getElementsByTag("blockquote").first(); // (3)
        Document webPage = Jsoup.parse(page.content()); // (3)
        Elements blockquote = webPage.getElementsByTag("blockquote"); // (3)
        for (Element element : blockquote) {
            String frase = element.text();
            String autor = element.getElementsByTag("cite").text(); 
            fraseData.add(new FraseDto(frase, autor));
            
        }
        browser.close();
        return fraseData;
    }
}
