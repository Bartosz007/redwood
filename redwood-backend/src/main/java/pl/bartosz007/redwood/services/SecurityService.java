package pl.bartosz007.redwood.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.security.core.userdetails.*;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import pl.bartosz007.redwood.exceptions.DataInsertException;
import pl.bartosz007.redwood.models.User;
import pl.bartosz007.redwood.payloads.requests.LoginPayload;
import pl.bartosz007.redwood.payloads.requests.UserPayload;
import pl.bartosz007.redwood.payloads.responses.BasicResponseMessage;
import pl.bartosz007.redwood.payloads.responses.ExtendedResponseMessage;
import pl.bartosz007.redwood.repositories.UserRepository;

import java.sql.SQLException;

@Service
public class SecurityService implements UserDetailsService {

    private UserRepository userRepository;

    @Autowired
    public SecurityService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User loadUserByUsername(String username) throws UsernameNotFoundException {

        return userRepository.findByEmail(username).orElseThrow(
                () -> new UsernameNotFoundException("Użytkownik nie istnieje")
        );

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
