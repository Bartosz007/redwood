package pl.bartosz007.redwood.repositories;

import org.postgresql.util.PSQLException;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import pl.bartosz007.redwood.models.User;

import java.sql.SQLException;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    boolean existsByEmailAndPassword(String email, String password);

    @Modifying
    @Query(value = """
            INSERT INTO users(email, password) VALUES(?,?)""",
            nativeQuery = true)
    void addUser(String email, String password) throws PSQLException;

    @Override
    public User save(User entity);

}
