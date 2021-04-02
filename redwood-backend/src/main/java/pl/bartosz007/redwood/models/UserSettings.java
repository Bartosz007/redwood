package pl.bartosz007.redwood.models;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class UserSettings {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idUserSettings;

    @Column(length = 20)
    private String fontColor;
    @Column(length = 20)
    private String fgColor;
    @Column(length = 20)
    private String bgColor;

    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "id_user_details")
    private UserDetails userDetails;
}
