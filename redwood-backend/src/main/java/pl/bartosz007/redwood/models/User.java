package pl.bartosz007.redwood.models;

import com.fasterxml.jackson.annotation.*;

import lombok.Data;


import javax.persistence.*;
import javax.validation.constraints.Size;
import java.util.List;

@Data
@Entity(name="users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idUser;

    @Column(length = 30)
    @Size(min = 5, max = 30)
    private String email;

    private String password;

    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "user")
    @JsonManagedReference
    private UserData userData;

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "user")
    @JsonBackReference
    private List<Article> articles;

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "user")

    @JsonBackReference
    private List<Comment> comments;

}
