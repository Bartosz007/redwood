package pl.bartosz007.redwood.messages;

import lombok.Data;

@Data
public class PostResponseMessage {
    private boolean state;
    private String message;

    public PostResponseMessage(boolean state, String message) {
        this.state = state;
        this.message = message;
    }


    @Override
    public String toString() {
        return "PostResponseMessage{" +
                "state=" + state +
                ", message='" + message + '\'' +
                '}';
    }

}
