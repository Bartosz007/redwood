package pl.bartosz007.redwood.models;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Type {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idType;

    @Enumerated(EnumType.ORDINAL)
    @Column(length = 10)
    private Types type;

    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "type")
    private Article article;

}
