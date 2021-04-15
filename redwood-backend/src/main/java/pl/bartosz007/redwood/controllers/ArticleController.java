package pl.bartosz007.redwood.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.bartosz007.redwood.models.Article;
import pl.bartosz007.redwood.repositories.ArticleRepository;


@RestController
@RequestMapping("/article")
public class ArticleController {

    private final ArticleRepository articleRepository;

    @Autowired
    public ArticleController(ArticleRepository articleRepository) {
        this.articleRepository = articleRepository;
    }

    @GetMapping("/{articleId}")
    @CrossOrigin(origins = "http://localhost:3000")
    public Article getArticle(@PathVariable Long articleId){
        return articleRepository.getOne(articleId);
    }

}
