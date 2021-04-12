package pl.bartosz007.redwood.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.bartosz007.redwood.models.Article;
import pl.bartosz007.redwood.repositories.ArticleRepository;

import java.util.Collection;
import java.util.List;

@RestController
public class ArticleController {

    private ArticleRepository articleRepository;

    @Autowired
    public ArticleController(ArticleRepository articleRepository) {
        this.articleRepository = articleRepository;
    }

    @GetMapping("/test2")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<Article> getArticles(){
    //    articleRepository.findAll().forEach(e->e.toString());

        return articleRepository.findAll();
    }
  /*  @GetMapping("/test2")
    public String getArticles(){
        return "articleRepository.findAll()";
    }*/
}
