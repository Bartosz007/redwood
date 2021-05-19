package pl.bartosz007.redwood.payloads.requests;

import lombok.Data;
import pl.bartosz007.redwood.models.*;
import pl.bartosz007.redwood.services.FileDecoder;

import java.io.IOException;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@Data
public class ArticlePayload {

    private long id;
    private String title;
    private List<String> images;
    private String text;
    private String articleType;
    private List<String> tags;
    private String email;

    public Article buildArticle(User currentUser) throws IOException {


        Article article = new Article();
        article.setTitle(title);
        article.setImages(convertImages(images));
        article.setText(text);
        article.setDate(LocalDate.now());
        article.setTime(LocalTime.now());
        article.setArticleType(new ArticleType(articleType));
        article.setUser(currentUser);
        article.setTags(getTags(article));
        article.setVerificated(currentUser.getUserData().getPermission().getLevel() > PermissionLevels.USER.getLevel());

        return article;
    }

    public List<Tag> getTags(Article article) {
        return Tag.buildTagList(tags, article);
    }

    public ArticleType getArticleType() {
        return new ArticleType(articleType);
    }

    public String convertImages(List<String> images) throws IOException {
        StringBuffer stringBuffer = new StringBuffer();

        images.forEach((image) -> {
            FileDecoder fileDecoder = new FileDecoder(image);
            fileDecoder.saveByte64ToFile();
            stringBuffer.append(fileDecoder.getFileName());
            stringBuffer.append(",");
        });

        return stringBuffer.toString();

    }
}
