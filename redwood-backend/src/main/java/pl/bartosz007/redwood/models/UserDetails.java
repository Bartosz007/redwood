package pl.bartosz007.redwood.models;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.Size;


@Entity
@Data
public class UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idUserDetails;

    @Column(length = 50)
    @Size(min = 5, max = 50)
    private String name;

    @Column(length = 50)
    @Size(min = 5, max = 50)
    private String surname;

    @Enumerated(EnumType.ORDINAL)
    private PermisionLevels permisionLevel;

    private int warnLevel;

    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "userDetails")
    private UserSettings userSettings;

    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "id_user")
    private User_ user;

}
