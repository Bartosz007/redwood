package pl.bartosz007.redwood.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.bartosz007.redwood.models.Article;
import pl.bartosz007.redwood.models.User;
import pl.bartosz007.redwood.payloads.requests.ArticlePayload;
import pl.bartosz007.redwood.payloads.responses.PostResponseMessage;
import pl.bartosz007.redwood.repositories.ArticleRepository;
import pl.bartosz007.redwood.repositories.UserRepository;

@Service
public class ArticleService {

    private ArticleRepository articleRepository;
    private UserRepository userRepository;

    @Autowired
    public ArticleService(ArticleRepository articleRepository, UserRepository userRepository) {
        this.articleRepository = articleRepository;
        this.userRepository = userRepository;
    }

    public PostResponseMessage addArticle(ArticlePayload articlePayload){

        User currentUser = userRepository.getOne(Long.valueOf(articlePayload.getUserId()));
        Article article = articlePayload.buildArticle(currentUser);
        articleRepository.save(article);

        return new PostResponseMessage(true,"Article added!");
    }
}
