package pl.bartosz007.redwood.models;

import com.fasterxml.jackson.annotation.*;

import javax.persistence.*;

@Entity
public class UserSettings{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idUserSettings;

    @Column(length = 30)
    private String fontColor = "rgba(0,0,0,1)";

    @Column(length = 30)
    private String fgColor = "rgba(255,255,255,0.5)";

    @Column(length = 30)
    private String bgColor = "rgba(255,255,255,0.7)";

    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JsonBackReference
    @JoinColumn(name = "id_user_data")
    private UserData userData;


}
