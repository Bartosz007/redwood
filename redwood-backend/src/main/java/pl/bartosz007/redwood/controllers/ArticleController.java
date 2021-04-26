package pl.bartosz007.redwood.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import pl.bartosz007.redwood.payloads.responses.PostResponseMessage;
import pl.bartosz007.redwood.models.Article;
import pl.bartosz007.redwood.payloads.requests.ArticlePayload;
import pl.bartosz007.redwood.repositories.ArticleRepository;
import pl.bartosz007.redwood.services.ArticleService;


@RestController
public class ArticleController {

    private final ArticleRepository articleRepository;
    private final ArticleService articleService;

    @Autowired
    public ArticleController(ArticleRepository articleRepository, ArticleService articleService) {
        this.articleRepository = articleRepository;
        this.articleService = articleService;
    }

    @GetMapping("/article/{articleId}")
    @CrossOrigin(origins = "http://localhost:3000")
    public Article getArticle(@PathVariable Long articleId){
        return articleRepository.getOne(articleId);
    }

    @PostMapping("/addArticle")
   // @RequestMapping(value = "/addArticle", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    @CrossOrigin(origins = "http://localhost:3000")
    public PostResponseMessage addArticle(@RequestBody ArticlePayload articlePayload){

        return articleService.addArticle(articlePayload);
    }



}
