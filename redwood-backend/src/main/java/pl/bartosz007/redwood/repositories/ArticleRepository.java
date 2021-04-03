package pl.bartosz007.redwood.repositories;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.bartosz007.redwood.models.Article;

@Repository
public interface ArticleRepository extends JpaRepository<Article, Long>{

}