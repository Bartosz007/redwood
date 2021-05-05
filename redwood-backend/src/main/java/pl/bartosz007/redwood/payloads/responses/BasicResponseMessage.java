package pl.bartosz007.redwood.payloads.responses;

import lombok.Data;

@Data
public class BasicResponseMessage {
    private boolean status;
    private String message;

    public BasicResponseMessage(boolean state, String message) {
        this.status = state;
        this.message = message;
    }


    @Override
    public String toString() {
        return "PostResponseMessage{" +
                "state=" + status +
                ", message='" + message + '\'' +
                '}';
    }

}
