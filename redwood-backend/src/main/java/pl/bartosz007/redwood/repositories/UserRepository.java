package pl.bartosz007.redwood.repositories;

import org.postgresql.util.PSQLException;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Repository;
import pl.bartosz007.redwood.models.User;

import java.sql.SQLException;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    boolean existsByEmailAndPassword(String email, String password);

    Optional<User> findByEmail(String email) throws UsernameNotFoundException;

    @Override
    User save(User entity);

    @Override
    User getOne(Long idUser);

    User getUserByEmail(String email);

    @Override
    void deleteById(Long idUser);
}
