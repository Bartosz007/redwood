package pl.bartosz007.redwood.services;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;
import pl.bartosz007.redwood.exceptions.DataInsertException;
import pl.bartosz007.redwood.payloads.requests.UserPayload;
import pl.bartosz007.redwood.payloads.responses.BasicResponseMessage;
import pl.bartosz007.redwood.repositories.UserRepository;

import java.sql.SQLException;

@Service
public class SecurityService {
    private UserRepository userRepository;

    public SecurityService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public BasicResponseMessage findUser(String login, String password) {
        boolean loginState = userRepository.existsByEmailAndPassword(login, password);
        String message;
        if (loginState)
            message = "Success!";
        else
            message = "Login failure!";

        return new BasicResponseMessage(loginState, message);
    }


    public BasicResponseMessage addUser(UserPayload userPayload)
            throws DataInsertException {

        try {
            userRepository.save(userPayload.buildUser());
        } catch (DataIntegrityViolationException e) {
            return handleInsertException(e);
        }

        return new BasicResponseMessage(true, "New account has been created!");


    }

    private <E extends DataIntegrityViolationException> BasicResponseMessage handleInsertException(E e)
            throws DataInsertException {

        if (e.getMostSpecificCause()
                .getClass()
                .getName().equals("org.postgresql.util.PSQLException")
                && ((SQLException) e.getMostSpecificCause())
                .getSQLState().equals("23505"))
            return new BasicResponseMessage(false, "W bazie istnieje już użytkownik z podanym emailem!");
        else {
            throw new DataInsertException("Another problem with insert", e.getMostSpecificCause());
        }
    }



}
