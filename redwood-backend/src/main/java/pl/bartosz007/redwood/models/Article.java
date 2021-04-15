package pl.bartosz007.redwood.models;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.sql.Date;
import java.sql.Time;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Data;
import org.hibernate.annotations.Type;


@Data
@Entity(name = "articles")
public class Article {
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

    private Date date;
    private Time time;

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

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name="id_user")
    @JsonManagedReference
    private User user;


}
