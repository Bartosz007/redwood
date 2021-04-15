package pl.bartosz007.redwood.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.util.Set;

@Data
@Entity
public class ArticleType {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idArticleType;

    @Enumerated(EnumType.STRING)
    @Column(length = 20)
    private Types type;

    @OneToMany(mappedBy = "articleType")
    @JsonBackReference
    private Set<Article> articles;


}
