package pl.bartosz007.redwood.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.bartosz007.redwood.controllers.ArticleController;
import pl.bartosz007.redwood.models.Article;
import pl.bartosz007.redwood.models.Comment;
import pl.bartosz007.redwood.models.User;
import pl.bartosz007.redwood.payloads.requests.BasicPayload;
import pl.bartosz007.redwood.payloads.requests.CommentPayload;
import pl.bartosz007.redwood.payloads.responses.BasicResponseMessage;
import pl.bartosz007.redwood.repositories.ArticleRepository;
import pl.bartosz007.redwood.repositories.CommentRepository;
import pl.bartosz007.redwood.repositories.UserRepository;

@Service
public class CommentService {
    private CommentRepository commentRepository;
    private UserRepository userRepository;
    private ArticleRepository articleRepository;

    @Autowired
    public CommentService(CommentRepository commentRepository,
                          UserRepository userRepository,
                          ArticleRepository articleRepository) {
        this.commentRepository = commentRepository;
        this.userRepository = userRepository;
        this.articleRepository = articleRepository;
    }

    public BasicResponseMessage addComment(CommentPayload commentPayload){
        User currentUser = userRepository.getUserByEmail(commentPayload.getEmail());
        System.out.println(currentUser);
     //   User currentUser = userRepository.getOne(commentPayload.getIdUser());
        Article currentArticle = articleRepository.getOne(commentPayload.getIdArticle());
        Comment comment = commentPayload.buildComment(currentUser, currentArticle);
        commentRepository.save(comment);

        return new BasicResponseMessage(true,"Dodano komentarz!");
    }


    public BasicResponseMessage deleteComment(BasicPayload basicPayload){
        commentRepository.deleteById(basicPayload.getId());
        return new BasicResponseMessage(true,"Pomyślnie usunięto komentarz!");
    }

}
