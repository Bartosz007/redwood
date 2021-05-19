package pl.bartosz007.redwood.payloads.requests;

public class ExtendedPayload<T> extends BasicPayload {

    private T additionalPayload;

    public T getAdditionalPayload() {
        return additionalPayload;
    }

    public void setAdditionalPayload(T additionalPayload) {
        this.additionalPayload = additionalPayload;
    }

    @Override
    public String toString() {
        return "ExtendedPayload{" +
                "additionalPayload=" + additionalPayload +
                '}';
    }
}
