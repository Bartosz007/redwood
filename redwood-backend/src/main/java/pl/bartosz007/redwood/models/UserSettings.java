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
    @JoinColumn(name = "id_user_details")
    private UserDetails userDetails;


    public UserSettings() {
    }

    public long getIdUserSettings() {
        return idUserSettings;
    }

    public void setIdUserSettings(long idUserSettings) {
        this.idUserSettings = idUserSettings;
    }

    public String getFontColor() {
        return fontColor;
    }

    public void setFontColor(String fontColor) {
        this.fontColor = fontColor;
    }

    public String getFgColor() {
        return fgColor;
    }

    public void setFgColor(String fgColor) {
        this.fgColor = fgColor;
    }

    public String getBgColor() {
        return bgColor;
    }

    public void setBgColor(String bgColor) {
        this.bgColor = bgColor;
    }

    public UserDetails getUserDetails() {
        return userDetails;
    }

    public void setUserDetails(UserDetails userDetails) {
        this.userDetails = userDetails;
    }
}
