package pl.bartosz007.redwood.models;

import com.fasterxml.jackson.annotation.*;
import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.Size;

@Data
@Entity(name="users_data")
public class UserData {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idUserData;

    @Column(length = 100, nullable = false)
    private String image;

    @Column(length = 100)
    @Size(min = 5, max = 100)
    private String name;

    @Column(length = 100)
    @Size(min = 5, max = 100)
    private String surname;

    private int warnLevel = 0;

    @Enumerated(EnumType.ORDINAL)
    private PermissionLevels permission = PermissionLevels.USER;

    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "userData")
    @JsonManagedReference
    private UserSettings userSettings;

    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "id_user")
    @JsonBackReference
    private User user;




}


