package pl.bartosz007.redwood.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.bartosz007.redwood.models.Comment;

public interface CommentRepository extends JpaRepository<Comment,Long> {

    @Override
    Comment save(Comment comment);

    @Override
    void deleteById(Long idComment);
}
