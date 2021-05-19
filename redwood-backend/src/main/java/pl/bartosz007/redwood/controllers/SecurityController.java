package pl.bartosz007.redwood.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import pl.bartosz007.redwood.config.JwtTokenUtil;
import pl.bartosz007.redwood.exceptions.DataInsertException;
import pl.bartosz007.redwood.models.User;
import pl.bartosz007.redwood.payloads.requests.LoginPayload;
import pl.bartosz007.redwood.payloads.requests.UserPayload;
import pl.bartosz007.redwood.payloads.responses.BasicResponseMessage;
import pl.bartosz007.redwood.payloads.responses.LoginResponseMessage;
import pl.bartosz007.redwood.services.SecurityService;

import java.util.Objects;


@RestController
public class SecurityController {

    private final SecurityService securityService;
    private final JwtTokenUtil jwtTokenUtil;
    private final AuthenticationManager authenticationManager;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public SecurityController(SecurityService securityService,
                              JwtTokenUtil jwtTokenUtil,
                              AuthenticationManager authenticationManager,
                              PasswordEncoder passwordEncoder) {

        this.securityService = securityService;
        this.jwtTokenUtil = jwtTokenUtil;
        this.authenticationManager = authenticationManager;
        this.passwordEncoder = passwordEncoder;
    }


    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginPayload loginPayload) throws Exception {

        authenticate(loginPayload.getEmail(), loginPayload.getPassword());

        try {
            User user = securityService
                    .loadUserByUsername(loginPayload.getEmail());

            String token = jwtTokenUtil.generateToken(user);

            LoginResponseMessage<User, String> response
                    = new LoginResponseMessage<>(
                    true,
                    "Zalogowano pomyślnie!",
                    token,
                    user
            );

            return ResponseEntity.ok(response);


        } catch (BadCredentialsException ex) {
            return ResponseEntity.ok(new BasicResponseMessage(false, "Błędne dane logowania!"));
        }

    }

    private void authenticate(String username, String password) throws Exception {
        Objects.requireNonNull(username);
        Objects.requireNonNull(password);
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
        } catch (DisabledException e) {
            throw new Exception("Użytkownik wyłączony!", e);
        } catch (BadCredentialsException e) {
            throw new Exception("Błędne dane logowania!", e);
        }
    }

    @PostMapping("/register")
    public BasicResponseMessage register(@RequestBody UserPayload userPayload) {

        userPayload.setPassword(passwordEncoder.encode(userPayload.getPassword()));
        try {
            return securityService.addUser(userPayload);
        } catch (DataInsertException e) {
            e.printStackTrace();
        }

        return new BasicResponseMessage(false, "Error ?");
    }

}
