package pl.bartosz007.redwood.payloads.requests;

import lombok.Data;
import org.springframework.web.multipart.MultipartFile;
import pl.bartosz007.redwood.models.User;
import pl.bartosz007.redwood.models.UserData;
import pl.bartosz007.redwood.models.UserSettings;

import java.awt.*;


@Data
public class UserPayload {
    String email;
    String password;
    String image;
    String name;
    String surname;

    public User buildUser(){
        User newUser = new User();
        UserData newUserData = new UserData();
        UserSettings newUserSettings = new UserSettings();

        newUserSettings.setUserData(newUserData);

        newUserData.setUserSettings(newUserSettings);
        newUserData.setUser(newUser);
        newUserData.setName(name);
        newUserData.setSurname(surname);
        newUserData.setImage(image);

        newUser.setEmail(email);
        newUser.setPassword(password);
        newUser.setUserData(newUserData);

        return newUser;
    }

}
