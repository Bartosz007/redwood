package pl.bartosz007.redwood.models;

import java.io.Serializable;

public enum Types implements Serializable {
    ESSAY(0), GUIDE(1), CROSS(2);

    private int type;

    Types(int type) {
        this.type = type;
    }

    public int getType() {
        return type;
    }

    @Override
    public String toString() {
        return this.name();
    }
}
