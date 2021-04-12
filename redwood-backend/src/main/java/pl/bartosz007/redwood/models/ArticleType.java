package pl.bartosz007.redwood.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Set;

@Entity
public class ArticleType {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idArticleType;

    @Enumerated(EnumType.ORDINAL)
    private Types type;

    @OneToMany(mappedBy = "articleType")
    @JsonBackReference
    private Set<Article> articles;


    public ArticleType() {
    }

    public long getIdArticleType() {
        return idArticleType;
    }

    public void setIdArticleType(long idArticleType) {
        this.idArticleType = idArticleType;
    }

    public Types getType() {
        return type;
    }

    public void setType(Types type) {
        this.type = type;
    }

    public Set<Article> getArticles() {
        return articles;
    }

    public void setArticles(Set<Article> articles) {
        this.articles = articles;
    }

}
