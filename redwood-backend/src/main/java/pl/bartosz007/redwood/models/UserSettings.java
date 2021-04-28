package pl.bartosz007.redwood.models;

import com.fasterxml.jackson.annotation.*;
import lombok.Data;
import pl.bartosz007.redwood.payloads.requests.UserSettingsPayload;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Data
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

    public void update(UserSettingsPayload userSettingsPayload){
        this.fontColor = userSettingsPayload.getFontColor();
        this.fgColor = userSettingsPayload.getFgColor();
        this.bgColor = userSettingsPayload.getBgColor();
    };


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
