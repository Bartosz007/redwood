package pl.bartosz007.redwood.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.bartosz007.redwood.payloads.requests.BasicPayload;
import pl.bartosz007.redwood.payloads.requests.ExtendedPayload;
import pl.bartosz007.redwood.payloads.responses.BasicResponseMessage;
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
    public Article getArticle(@PathVariable Long articleId) {
        return articleRepository.getOne(articleId);
    }

    @PostMapping("/addArticle")
    @CrossOrigin(origins = "http://localhost:3000")
    public BasicResponseMessage addArticle(@RequestBody ArticlePayload articlePayload) {
        return articleService.addArticle(articlePayload);
    }

    @PutMapping("/verification")
    @CrossOrigin(origins = "http://localhost:3000")
    public BasicResponseMessage verification(@RequestBody ExtendedPayload<Boolean> extendedPayload) {
        return articleService.verification(extendedPayload);
    }

    @DeleteMapping("/deleteArticle")
    @CrossOrigin(origins = "http://localhost:3000")
    public BasicResponseMessage deleteArticle(@RequestBody BasicPayload basicPayload) {
        return articleService.deleteArticle(basicPayload.getId());
    }

}
