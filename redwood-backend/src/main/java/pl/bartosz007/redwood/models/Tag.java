package pl.bartosz007.redwood.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Entity
@Data
public class Tag implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idTag;

    @Column(length = 100)
    @Size(min = 3, max = 100)
    private String name;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.MERGE)
    @JoinColumn(name = "id_article")
    @JsonBackReference
    private Article article;

    public Tag() {
    }

    public Tag(String name, Article article) {
        this.name = name;
        this.article = article;
    }

    public static List<Tag> buildTagList(List<String> tags, Article article){
        return tags
                .stream()
                .map(tag -> new Tag(tag,article)).collect(Collectors.toCollection(ArrayList<Tag>::new ));
    }

    @Override
    public String toString() {
        return "Tag{" +
                "idTag=" + idTag +
                ", name='" + name + '\'' +
                '}';
    }
}
