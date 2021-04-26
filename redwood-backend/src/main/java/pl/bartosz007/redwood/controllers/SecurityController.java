package pl.bartosz007.redwood.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.bartosz007.redwood.exceptions.DataInsertException;
import pl.bartosz007.redwood.payloads.requests.UserPayload;
import pl.bartosz007.redwood.payloads.responses.PostResponseMessage;
import pl.bartosz007.redwood.repositories.UserRepository;
import pl.bartosz007.redwood.services.UserService;

@RestController
public class SecurityController {

    private UserRepository userRepository;
    private UserService userService;

    @Autowired
    public SecurityController(UserRepository userRepository, UserService userService) {
        this.userRepository = userRepository;
        this.userService = userService;
    }

    @PostMapping("/login")
    @ResponseBody
    @CrossOrigin(origins = "http://localhost:3000")
    public PostResponseMessage login(@RequestParam String email, @RequestParam  String password){
         return userService.findUser(email, password);
    }

    @PostMapping("/register")
    @CrossOrigin(origins = "http://localhost:3000")
    public PostResponseMessage register(@RequestBody UserPayload userPayload){

        try {
            return userService.addUser(userPayload);
        } catch (DataInsertException throwables) {
            throwables.printStackTrace();
        }

        return new PostResponseMessage(false, "Error ?");
    }

    @PostMapping("/logout")
    @CrossOrigin(origins = "http://localhost:3000")
    public PostResponseMessage logout(){
        return new PostResponseMessage(true, "Logout with success!");
    }
}

/*
email:"test",
password:"test",
image:"image.png",
name:"TestImie",
surname:"TestNazwisko"
 */