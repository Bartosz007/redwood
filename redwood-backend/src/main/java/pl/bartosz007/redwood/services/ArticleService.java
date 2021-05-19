package pl.bartosz007.redwood.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import pl.bartosz007.redwood.models.Article;
import pl.bartosz007.redwood.models.User;
import pl.bartosz007.redwood.payloads.requests.ArticlePayload;
import pl.bartosz007.redwood.payloads.requests.ExtendedPayload;
import pl.bartosz007.redwood.payloads.responses.BasicResponseMessage;
import pl.bartosz007.redwood.repositories.ArticleRepository;
import pl.bartosz007.redwood.repositories.TagRepository;
import pl.bartosz007.redwood.repositories.UserRepository;

import java.io.IOException;

@Service
public class ArticleService {

    private final ArticleRepository articleRepository;
    private final UserRepository userRepository;
    private final TagRepository tagRepository;

    @Autowired
    public ArticleService(ArticleRepository articleRepository,
                          UserRepository userRepository,
                          TagRepository tagRepository) {
        this.articleRepository = articleRepository;
        this.userRepository = userRepository;
        this.tagRepository = tagRepository;
    }

    public BasicResponseMessage addArticle(ArticlePayload articlePayload) {


        User currentUser = userRepository.findByEmail(articlePayload.getEmail()).orElseThrow(
                () -> new UsernameNotFoundException("User not exists!")
        );

        try {
            Article article = articlePayload.buildArticle(currentUser);
            articleRepository.save(article);
            return new BasicResponseMessage(true, "Pomyślnie dodano artykuł!");

        } catch (IOException e) {
            e.printStackTrace();

        }

        return new BasicResponseMessage(false, "Błąd podczas dodawania artykułu!");

    }


    public BasicResponseMessage deleteArticle(Long id) {
        articleRepository.deleteById(id);
        return new BasicResponseMessage(true, "Pomyślnie usunięto artykuł");
    }

    public BasicResponseMessage verification(ExtendedPayload<Boolean> extendedPayload) {

        if (extendedPayload.getAdditionalPayload()) {
            Article article = articleRepository.getOne(extendedPayload.getId());
            article.setVerificated(true);
            articleRepository.save(article);
            return new BasicResponseMessage(true, "Pomyślnie zweryfikowano artykuł!");
        } else {
            return deleteArticle(extendedPayload.getId());
        }

    }

}
