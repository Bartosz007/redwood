package pl.bartosz007.redwood.payloads.requests;

import lombok.Data;


public class ExtendedPayload<T> extends BasicPayload{

    private T additionalPayload;

    public T getAdditionalPayload() {
        return additionalPayload;
    }

    public void setAdditionalPayload(T additionalPayload) {
        this.additionalPayload = additionalPayload;
    }
}
