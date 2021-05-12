package pl.bartosz007.redwood.models;

import com.fasterxml.jackson.annotation.*;
import lombok.Data;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.util.*;

@Data
@Entity(name="users")
public class User implements Serializable, UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idUser;

    @Column(length = 30, unique = true, nullable = false)
    @Size(min = 5, max = 30)
    private String email;

    @Column(nullable = false)
    @JsonIgnore
    private String password;

    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "user")
    @JsonManagedReference
    private UserData userData;

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "user")
    @JsonBackReference
    private List<Article> articles;

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "user")
    @JsonBackReference
    private List<Comment> comments;


    public User() {
    }

    public User(long idUser) {
        this.idUser = idUser;
    }

    public User(String email, String password, String image, String name, String surname){
        this.email = email;
        this.password = password;
        this.userData = new UserData(image, name, surname);
    }

    @Override
    public String toString() {
        return "User{" +
                "idUser=" + idUser +
                ", email='" + email + '\'' +
                ", password='" + password +'}';
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public String getPassword(){
        return password;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public Collection<GrantedAuthority> getAuthorities() {
        List<GrantedAuthority> authorities = new ArrayList<>();
        authorities.add(new SimpleGrantedAuthority(PermissionLevels.ZBANOWANY.name()));

        if(userData.getPermission() == PermissionLevels.USER){
            authorities.add(new SimpleGrantedAuthority(PermissionLevels.USER.name()));
        }else if(userData.getPermission() == PermissionLevels.MODERATOR){
            authorities.add(new SimpleGrantedAuthority(PermissionLevels.USER.name()));
            authorities.add(new SimpleGrantedAuthority(PermissionLevels.MODERATOR.name()));
        }else if(userData.getPermission() == PermissionLevels.ADMIN){
            authorities.add(new SimpleGrantedAuthority(PermissionLevels.USER.name()));
            authorities.add(new SimpleGrantedAuthority(PermissionLevels.MODERATOR.name()));
            authorities.add(new SimpleGrantedAuthority(PermissionLevels.ADMIN.name()));
        }

        return authorities;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
