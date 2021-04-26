package pl.bartosz007.redwood.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

@Data
@Entity
public class ArticleType implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idArticleType;

    @Enumerated(EnumType.STRING)
    @Column(length = 20)
    private Types type;

    @OneToMany(mappedBy = "articleType", cascade=CascadeType.ALL)
    @JsonBackReference
    private Set<Article> articles;

    public ArticleType() {
    }

    public ArticleType(String type) {
        this.type = Types.valueOf(type);
        this.idArticleType = Types.valueOf(type).getType();
    }

    @Override
    public String toString() {
        return "ArticleType{" +
                "idArticleType=" + idArticleType +
                ", type=" + type +
                '}';
    }
}
