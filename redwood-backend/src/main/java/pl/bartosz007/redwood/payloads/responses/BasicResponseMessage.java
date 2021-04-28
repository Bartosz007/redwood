package pl.bartosz007.redwood.payloads.responses;

import lombok.Data;

@Data
public class BasicResponseMessage {
    private boolean state;
    private String message;

    public BasicResponseMessage(boolean state, String message) {
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
