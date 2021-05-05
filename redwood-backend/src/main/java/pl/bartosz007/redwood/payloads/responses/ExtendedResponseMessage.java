package pl.bartosz007.redwood.payloads.responses;

public class ExtendedResponseMessage<T> extends BasicResponseMessage{

    private T additionalPayload;

    public ExtendedResponseMessage(boolean state, String message, T additionalPayload) {
        super(state, message);
        this.additionalPayload = additionalPayload;
    }

    public T getAdditionalPayload() {
        return additionalPayload;
    }

    public void setAdditionalPayload(T additionalPayload) {
        this.additionalPayload = additionalPayload;
    }
}
