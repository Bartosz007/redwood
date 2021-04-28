package pl.bartosz007.redwood.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.bartosz007.redwood.models.PermissionLevels;
import pl.bartosz007.redwood.models.User;
import pl.bartosz007.redwood.payloads.requests.BasicPayload;
import pl.bartosz007.redwood.payloads.requests.ExtendedPayload;
import pl.bartosz007.redwood.payloads.requests.UserSettingsPayload;
import pl.bartosz007.redwood.payloads.responses.BasicResponseMessage;
import pl.bartosz007.redwood.repositories.UserRepository;
import pl.bartosz007.redwood.services.UserService;

import java.util.List;

@RestController
public class UserController {

    private UserRepository userRepository;
    private UserService userService;

    @Autowired
    public UserController(UserRepository userRepository, UserService userService) {
        this.userRepository = userRepository;
        this.userService = userService;
    }

    @GetMapping("/userList")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<User> getUserList(){
        return userRepository.findAll();
    }

    @PutMapping("/saveSettings")
    @CrossOrigin(origins = "http://localhost:3000")
    public BasicResponseMessage saveSettings(@RequestBody UserSettingsPayload userSettingsPayload){
        return userService.updateUserSettings(userSettingsPayload);
    }

    @PutMapping("/ban")
    @CrossOrigin(origins = "http://localhost:3000")
    public BasicResponseMessage ban(@RequestBody BasicPayload basicPayload){
        return userService.giveBan(basicPayload);
    }

    @PutMapping("/warn")
    @CrossOrigin(origins = "http://localhost:3000")
    public BasicResponseMessage warn(@RequestBody BasicPayload basicPayload){
        return userService.giveWarn(basicPayload);
    }

    @PutMapping("/changePermit")
    @CrossOrigin(origins = "http://localhost:3000")
    public BasicResponseMessage changePermit(@RequestBody ExtendedPayload<PermissionLevels> extendedPayload){
        return userService.changeUserPermission(extendedPayload);
    }


}
