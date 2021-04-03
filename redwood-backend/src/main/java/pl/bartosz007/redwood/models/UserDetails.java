package pl.bartosz007.redwood.models;

import com.fasterxml.jackson.annotation.*;

import javax.persistence.*;
import javax.validation.constraints.Size;

@Entity
public class UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idUserDetails;

    @Column(length = 50)
    @Size(min = 5, max = 50)
    private String name;

    @Column(length = 50)
    @Size(min = 5, max = 50)
    private String surname;

    @Column(length = 30)
    private String image;

    @Enumerated(EnumType.ORDINAL)
    private PermisionLevels permisionLevel;

    private int warnLevel;

    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "userDetails")
    @JsonManagedReference
    private UserSettings userSettings;

    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "id_user")
    @JsonBackReference
    private UserData userData;


    public UserDetails() {
    }

    public long getIdUserDetails() {
        return idUserDetails;
    }

    public void setIdUserDetails(long idUserDetails) {
        this.idUserDetails = idUserDetails;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public PermisionLevels getPermisionLevel() {
        return permisionLevel;
    }

    public void setPermisionLevel(PermisionLevels permisionLevel) {
        this.permisionLevel = permisionLevel;
    }

    public int getWarnLevel() {
        return warnLevel;
    }

    public void setWarnLevel(int warnLevel) {
        this.warnLevel = warnLevel;
    }

    public UserSettings getUserSettings() {
        return userSettings;
    }

    public void setUserSettings(UserSettings userSettings) {
        this.userSettings = userSettings;
    }

    public UserData getUserData() {
        return userData;
    }

    public void setUserData(UserData userData) {
        this.userData = userData;
    }

}


