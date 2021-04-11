package pl.bartosz007.redwood.models;

import com.fasterxml.jackson.annotation.*;
import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class UserData {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idUserDetails;



    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "userData")
    @JsonManagedReference
    private UserSettings userSettings;

    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "id_user")
    @JsonBackReference
    private User user;




}


