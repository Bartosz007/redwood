package pl.bartosz007.redwood.config;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import io.jsonwebtoken.JwtException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import pl.bartosz007.redwood.models.User;
import pl.bartosz007.redwood.services.SecurityService;


@Component
public class JwtRequestFilter extends OncePerRequestFilter {

    private SecurityService securityService;
    private JwtTokenUtil jwtTokenUtil;

    @Autowired
    public JwtRequestFilter(SecurityService securityService, JwtTokenUtil jwtTokenUtil) {
        this.securityService = securityService;
        this.jwtTokenUtil = jwtTokenUtil;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain chain)
            throws ServletException, IOException {

        String requestTokenHeader = request.getHeader(HttpHeaders.AUTHORIZATION);

        String email = null;
        String token = null;
//Bearer erwhuith43r8943ht4thgsdfgjksdfsd
        /* sprawdzenie poprawności nagłówka i ucięcie jego początku */
        if (requestTokenHeader != null && requestTokenHeader.startsWith("Bearer ")) {
            token = requestTokenHeader.substring(7);

            try {
                email = jwtTokenUtil.getUsernameFromToken(token);
            } catch (IllegalArgumentException e) {
                System.out.println("Brak możliwości uzyskania tokena");
            } catch (JwtException e) {
                System.out.println("Token stracił swoją ważność");
            }
        } else {
            logger.warn("JWT Token does not begin with Bearer String");
        }

        /* sprawdzenie poprawności tokena */
        if (email != null && SecurityContextHolder.getContext().getAuthentication() == null) {

            User user = securityService.loadUserByUsername(email);

            if (jwtTokenUtil.validateToken(token, user)) {

                UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken
                        = new UsernamePasswordAuthenticationToken(
                        user,
                        null,
                        user.getAuthorities());
                //TODO tu można sróbować dodać role
                usernamePasswordAuthenticationToken
                        .setDetails(new WebAuthenticationDetailsSource().buildDetails(request));


                SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);

            }
        }

        chain.doFilter(request, response);
    }

}