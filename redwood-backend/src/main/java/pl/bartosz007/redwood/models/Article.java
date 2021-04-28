package pl.bartosz007.redwood.models;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.sql.Date;
import java.sql.Time;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Data;
import org.hibernate.annotations.Type;
import pl.bartosz007.redwood.payloads.requests.ArticlePayload;


@Data
@Entity(name = "articles")
public class Article implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idArticle;

    @Column(nullable = false)
    @Size(min = 50, max = 100)
    private String title;

    @Column(length = 200, nullable = false)
    private String images;

    @Lob
    @Type(type = "org.hibernate.type.TextType")
    @Size(min = 300)
    private String text;

    private LocalDate date;
    private LocalTime time;
    private boolean verificated = false;

    @ManyToOne
    @JoinColumn(name="id_article_type")
    @JsonManagedReference
    private ArticleType articleType;

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "article")
    @JsonManagedReference
    private List<Tag> tags;

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "article")
    @JsonManagedReference
    private List<Comment> comments;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.MERGE)
    @JoinColumn(name="id_user")
    @JsonManagedReference
    private User user;


    public Article() {
    }

    public Article(long idArticle){
        this.idArticle = idArticle;
    }

    public void editValues(ArticlePayload articlePayload) {
        this.title = articlePayload.getTitle();
        this.images = articlePayload.getImages();
        this.text = articlePayload.getText();
        this.date = LocalDate.now();
        this.time = LocalTime.now();
        this.articleType = articlePayload.getArticleType();
        this.tags = articlePayload.getTags(this);
    }

    @Override
    public String toString() {
        return "Article{" +
                "idArticle=" + idArticle +
                ", title='" + title + '\'' +
                ", images='" + images + '\'' +
                ", text='" + text + '\'' +
                ", date=" + date +
                ", time=" + time +
                ", verificated=" + verificated +
                ", articleType=" + articleType +
                ", tags=" + tags +
                ", comments=" + comments +
                ", user=" + user +
                '}';
    }


}
