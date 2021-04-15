package pl.bartosz007.redwood.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.bartosz007.redwood.models.Article;
import pl.bartosz007.redwood.models.PermissionLevels;
import pl.bartosz007.redwood.models.Types;
import pl.bartosz007.redwood.repositories.ArticleRepository;
import pl.bartosz007.redwood.services.ArticlesListService;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/essayList")
public class ArticlesListController {
    private final ArticleRepository articleRepository;

    @Autowired
    public ArticlesListController(ArticleRepository articleRepository) {
        this.articleRepository = articleRepository;
    }

    @GetMapping("/essays")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<Article> getAllEssays(){
        return articleRepository
                .findByTwoTypes(Types.ESSAY.toString(),Types.GUIDE.toString());
    }

    @GetMapping("/crosses")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<Article> getAllCrosses(){
        return articleRepository
                .findByType(Types.CROSS.toString());
    }

    @GetMapping("/userArticles")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<Article> getAllUserArticles(){
      //  return articleRepository.findByUserPermissionLevel(PermissionLevels.USER.ordinal());
        return articleRepository
                .findAll()
                .stream()
                .filter(
                        article ->
                                article.getUser()
                                        .getUserData()
                                        .getPermission()
                                        .getLevel() == PermissionLevels.USER.ordinal()
                )
                .collect(Collectors.toCollection(ArrayList::new));
    }

}
