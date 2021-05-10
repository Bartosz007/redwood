package pl.bartosz007.redwood.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.bartosz007.redwood.models.Article;
import pl.bartosz007.redwood.models.PermissionLevels;
import pl.bartosz007.redwood.models.Types;
import pl.bartosz007.redwood.repositories.ArticleRepository;

import javax.annotation.security.RolesAllowed;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/essayList")
@RolesAllowed("USER")
public class ArticlesListController {
    private final ArticleRepository articleRepository;

    @Autowired
    public ArticlesListController(ArticleRepository articleRepository) {
        this.articleRepository = articleRepository;
    }

    @GetMapping("/essays")
    @CrossOrigin(origins = "http://localhost:3000")
    @RolesAllowed(PermissionLevels.R_ADMIN)
    public List<Article> getAllEssays(){
//        return articleRepository
//              .findByTwoTypes(Types.ESSAY.toString(),Types.GUIDE.toString());
        return articleRepository.findAll();
    }

    @GetMapping("/crosses")
    @CrossOrigin(origins = "http://localhost:3000")
    @RolesAllowed(PermissionLevels.R_ADMIN)
    public List<Article> getAllCrosses(){
        return articleRepository
                .findByType(Types.CROSS.toString());
    }

    @GetMapping("/userArticles")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<Article> getAllUserArticles(){
        return articleRepository.findByUserPermissionLevel(PermissionLevels.USER.ordinal());
    }

}
