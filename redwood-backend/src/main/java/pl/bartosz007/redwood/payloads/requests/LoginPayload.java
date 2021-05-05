package pl.bartosz007.redwood.payloads.requests;

import lombok.Data;

@Data
public class LoginPayload {
    String email;
    String password;
}
