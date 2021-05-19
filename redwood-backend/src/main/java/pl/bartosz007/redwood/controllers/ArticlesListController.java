package pl.bartosz007.redwood.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.bartosz007.redwood.models.Article;
import pl.bartosz007.redwood.models.PermissionLevels;
import pl.bartosz007.redwood.models.Types;
import pl.bartosz007.redwood.repositories.ArticleRepository;

import javax.annotation.security.RolesAllowed;
import java.util.List;

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
    public List<Article> getAllEssays(){
        return articleRepository
              .findByTwoTypes(Types.ESSAY.name(),Types.GUIDE.name());
    }

    @GetMapping("/crosses")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<Article> getAllCrosses(){
        return articleRepository
                .findByType(Types.CROSS.name());
    }

    @GetMapping("/userArticles")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<Article> getAllUserArticles(){
        return articleRepository.findByUserPermissionLevel(PermissionLevels.USER.ordinal());
    }

    @GetMapping("/userArticleMgmtList")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<Article> getUserArticlesToVerification(){
        return articleRepository.findAllByVerificatedFalse();
    }

}
