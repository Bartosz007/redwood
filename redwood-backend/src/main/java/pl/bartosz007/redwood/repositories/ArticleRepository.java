package pl.bartosz007.redwood.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import pl.bartosz007.redwood.models.Article;

import javax.transaction.Transactional;
import java.util.List;

@Repository
public interface ArticleRepository extends JpaRepository<Article, Long> {

    @Query(value = """
            SELECT * FROM articles JOIN article_type 
            USING(id_article_type) WHERE type=:type AND verificated=true
            ORDER BY date, time""", nativeQuery = true)
    List<Article> findByType(@Param("type") String type);

    @Query(value = """
            SELECT * FROM articles JOIN article_type 
            USING(id_article_type) WHERE (type=:typeOne OR type=:typeTwo) AND verificated=true
            ORDER BY date, time""", nativeQuery = true)
    List<Article> findByTwoTypes(@Param("typeOne") String typeOne, @Param("typeTwo") String typeTwo);

    @Query(value = """
            SELECT * FROM articles JOIN article_type USING(id_article_type) 
            JOIN users USING(id_user) JOIN users_data USING(id_user) 
            WHERE permission=:level AND verificated=true ORDER BY date, time""",
            nativeQuery = true)
    List<Article> findByUserPermissionLevel(@Param("level") int level);

    List<Article> findAllByVerificatedFalse();

    @Override
    Article getOne(Long idArticle);

    @Override
    Article save(Article article);
}
