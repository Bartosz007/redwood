package pl.bartosz007.redwood.payloads.responses;

import pl.bartosz007.redwood.models.User;

public class LoginResponseMessage<P,T> extends ExtendedResponseMessage<T>{

    private User user;

    public LoginResponseMessage(boolean state, String message, T additionalPayload, User user) {
        super(state, message, additionalPayload);
        this.user = user;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
