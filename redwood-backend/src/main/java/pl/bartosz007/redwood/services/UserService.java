package pl.bartosz007.redwood.services;

import lombok.SneakyThrows;
import org.postgresql.util.PSQLException;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;
import pl.bartosz007.redwood.exceptions.DataInsertException;
import pl.bartosz007.redwood.messages.PostResponseMessage;
import pl.bartosz007.redwood.models.User;
import pl.bartosz007.redwood.repositories.UserRepository;

import java.sql.SQLException;

@Service
public class UserService {
    private UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public PostResponseMessage findUser(String login, String password) {
        boolean loginState = userRepository.existsByEmailAndPassword(login, password);
        String message;
        if (loginState)
            message = "Success!";
        else
            message = "Login failure!";

        return new PostResponseMessage(loginState, message);
    }


    public PostResponseMessage addUser(String email, String password, String image, String name, String surname)
            throws DataInsertException {

        try {
            userRepository.save(new User(email, password, image, name, surname));
        } catch (DataIntegrityViolationException e) {
            return handleInsertException(e);
        }

        return new PostResponseMessage(true, "New account has been created!");


    }


    private <E extends DataIntegrityViolationException> PostResponseMessage handleInsertException(E e)
            throws DataInsertException {

        if (e.getMostSpecificCause()
                .getClass()
                .getName().equals("org.postgresql.util.PSQLException")
                && ((SQLException) e.getMostSpecificCause())
                .getSQLState().equals("23505"))
            return new PostResponseMessage(false, "User with this email already exists!");
        else {
            throw new DataInsertException("Another problem with insert", e.getMostSpecificCause());
        }
    }

/*
   public boolean addUser(User newUser){

       // User newUser = new User(email, password, image, name, surname);
        boolean registerState = userRepository.addUser(newUser.getEmail(), newUser.getPassword());
        System.out.println(registerState);
        return false;
    }
*/

}
