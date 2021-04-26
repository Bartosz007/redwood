package pl.bartosz007.redwood.payloads.requests;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Data;
import org.hibernate.annotations.Type;
import pl.bartosz007.redwood.models.*;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.sql.Date;
import java.sql.Time;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@Data
public class ArticlePayload {

    private String title;
    private String images;
    private String text;
    private String articleType;
    private List<String> tags;
    private int userId;

    public Article buildArticle(User currentUser){
        LocalDate date = LocalDate.now();
        LocalTime time = LocalTime.now();

        Article article = new Article();
        article.setTitle(title);
        article.setImages(images);
        article.setText(text);
        article.setDate(date);
        article.setTime(time);
        article.setArticleType(new ArticleType(articleType) );
        article.setUser(currentUser);
        article.setTags(Tag.buildTagList(tags, article));
        article.setVerificated(currentUser.getUserData().getPermission().getLevel()>PermissionLevels.USER.getLevel());

        return article;
    }
}
