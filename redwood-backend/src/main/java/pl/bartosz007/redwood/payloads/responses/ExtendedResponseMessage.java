package pl.bartosz007.redwood.payloads.responses;

public class ExtendedResponseMessage<T> extends BasicResponseMessage{

    private T additionalPayload;

    public ExtendedResponseMessage(boolean state, String message) {
        super(state, message);
    }

    public T getAdditionalPayload() {
        return additionalPayload;
    }

    public void setAdditionalPayload(T additionalPayload) {
        this.additionalPayload = additionalPayload;
    }
}
