package pl.bartosz007.redwood.payloads.requests;

import lombok.Data;
import pl.bartosz007.redwood.models.*;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@Data
public class ArticlePayload {

    private long id;
    private String title;
    private String images;
    private String text;
    private String articleType;
    private List<String> tags;
    private Long userId;

    public Article buildArticle(User currentUser){

        Article article = new Article();
        article.setTitle(title);
        article.setImages(images);
        article.setText(text);
        article.setDate(LocalDate.now());
        article.setTime(LocalTime.now());
        article.setArticleType(new ArticleType(articleType) );
        article.setUser(currentUser);
        article.setTags(getTags(article));
        article.setVerificated(currentUser.getUserData().getPermission().getLevel()>PermissionLevels.USER.getLevel());

        return article;
    }

    public List<Tag> getTags(Article article) {
        System.out.println(Tag.buildTagList(tags, article));
        return Tag.buildTagList(tags, article);
    }

    public ArticleType getArticleType(){
        return new ArticleType(articleType);
    }
}
