package pl.bartosz007.redwood.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Data;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalTime;

@Data
@Entity(name = "comments")
public class Comment implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idComment;

    @Lob
    @Type(type = "org.hibernate.type.TextType")
    @Size(min = 5, max = 500)
    private String text;

    private LocalDate date;
    private LocalTime time;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.MERGE)
    @JoinColumn(name = "id_article")
    @JsonBackReference
    private Article article;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.MERGE)
    @JoinColumn(name = "id_user")
    @JsonManagedReference
    private User user;

    public Comment() {
    }

    @Override
    public String toString() {
        return "Comment{" +
                "idComment=" + idComment +
                ", text='" + text + '\'' +
                ", date=" + date +
                ", time=" + time +
                ", user=" + user +
                '}';
    }
}
