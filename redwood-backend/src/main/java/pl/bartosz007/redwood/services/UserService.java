package pl.bartosz007.redwood.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.bartosz007.redwood.models.PermissionLevels;
import pl.bartosz007.redwood.models.User;
import pl.bartosz007.redwood.models.UserSettings;
import pl.bartosz007.redwood.payloads.requests.BasicPayload;
import pl.bartosz007.redwood.payloads.requests.ExtendedPayload;
import pl.bartosz007.redwood.payloads.requests.UserSettingsPayload;
import pl.bartosz007.redwood.payloads.responses.BasicResponseMessage;
import pl.bartosz007.redwood.repositories.UserRepository;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public BasicResponseMessage updateUserSettings(UserSettingsPayload userSettingsPayload) {
        User user = userRepository.getUserByEmail(userSettingsPayload.getEmail());
        UserSettings userSettings = user.getUserData().getUserSettings();
        userSettings.update(userSettingsPayload);

        userRepository.save(user);

        return new BasicResponseMessage(true, "Pomyślnie zapisano ustawienia!");
    }

    public BasicResponseMessage giveBan(BasicPayload basicPayload) {
        changePermission(basicPayload.getId(), PermissionLevels.ZBANOWANY);

        return new BasicResponseMessage(true, "Pomyślnie zbanowano użytkownika!");
    }

    public BasicResponseMessage giveWarn(BasicPayload basicPayload) {
        User user = userRepository.getOne(basicPayload.getId());
        int actualWarnLevel = user.getUserData().getWarnLevel();
        if (actualWarnLevel > 10) {
            giveBan(basicPayload);
            user.getUserData().setWarnLevel(0);
        } else {
            user.getUserData().setWarnLevel(++actualWarnLevel);
        }
        userRepository.save(user);
        return new BasicResponseMessage(true, "Użytkownik otrzymał ostrzeżenie!");
    }

    public BasicResponseMessage deleteUser(BasicPayload basicPayload) {
        userRepository.deleteById(basicPayload.getId());
        return new BasicResponseMessage(true, "Usunięto użytkownika!");
    }

    public BasicResponseMessage changeUserPermission(ExtendedPayload<PermissionLevels> extendedPayload) {
        changePermission(extendedPayload.getId(), extendedPayload.getAdditionalPayload());
        return new BasicResponseMessage(true, "Pomyślnie zaktualizowano rolę!");
    }

    private void changePermission(Long idUser, PermissionLevels newLevel) {
        User user = userRepository.getOne(idUser);
        user.getUserData().setPermission(newLevel);
        userRepository.save(user);
    }

}
