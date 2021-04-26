package pl.bartosz007.redwood.models;

import com.fasterxml.jackson.annotation.*;

import javax.persistence.*;
import java.io.Serializable;

@Entity
public class UserSettings implements Serializable {

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



    public UserSettings() {
        this.fontColor = "rgba(0,0,0,1)";
        this.fgColor = "rgba(255,255,255,0.5)";
        this.bgColor ="rgba(255,255,255,0.7)";
    }

    @Override
    public String toString() {
        return "UserSettings{" +
                "idUserSettings=" + idUserSettings +
                ", fontColor='" + fontColor + '\'' +
                ", fgColor='" + fgColor + '\'' +
                ", bgColor='" + bgColor + '\'' +
                ", userData=" + userData +
                '}';
    }
}
