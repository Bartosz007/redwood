package pl.bartosz007.redwood.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.bartosz007.redwood.models.Article;
import pl.bartosz007.redwood.models.Tag;

import javax.transaction.Transactional;

@Repository
public interface TagRepository extends JpaRepository<Tag,Long> {

    @Transactional
    void deleteAllByArticle_IdArticle(Long idArticle);

}
