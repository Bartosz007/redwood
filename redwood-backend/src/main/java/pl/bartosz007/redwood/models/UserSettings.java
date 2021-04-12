package pl.bartosz007.redwood.models;

import com.fasterxml.jackson.annotation.*;

import javax.persistence.*;

@Entity
public class UserSettings{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idUserSettings;

    @Column(length = 30)
    private String fontColor;

    @Column(length = 30)
    private String fgColor;

    @Column(length = 30)
    private String bgColor;

    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JsonBackReference
    @JoinColumn(name = "id_user_data")
    private UserData userData;


}
