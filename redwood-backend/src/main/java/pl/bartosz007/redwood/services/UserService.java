package pl.bartosz007.redwood.services;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;
import pl.bartosz007.redwood.exceptions.DataInsertException;
import pl.bartosz007.redwood.payloads.requests.UserPayload;
import pl.bartosz007.redwood.payloads.responses.PostResponseMessage;
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


    public PostResponseMessage addUser(UserPayload userPayload)
            throws DataInsertException {

        try {
            userRepository.save(userPayload.buildUser());
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



}