package pl.bartosz007.redwood.payloads.requests;

import lombok.Data;
import pl.bartosz007.redwood.models.Article;
import pl.bartosz007.redwood.models.Comment;
import pl.bartosz007.redwood.models.User;

import java.time.LocalDate;
import java.time.LocalTime;

@Data
public class CommentPayload {

    private Long idComment;
    private String text;
    private Long idArticle;
    private String email;

    public Comment buildComment(User currentUser, Article currentArticle) {
        LocalDate date = LocalDate.now();
        LocalTime time = LocalTime.now();

        Comment newComment = new Comment();

        newComment.setText(text);
        newComment.setDate(date);
        newComment.setTime(time);
        newComment.setUser(currentUser);
        newComment.setArticle(currentArticle);

        return newComment;
    }

}
