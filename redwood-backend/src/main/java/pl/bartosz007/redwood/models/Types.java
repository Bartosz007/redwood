package pl.bartosz007.redwood.models;

import java.io.Serializable;

public enum Types implements Serializable {
    ESSAY(1), GUIDE(2), CROSS(3);

    private int type;

    Types(int type) {
        this.type = type;
    }

    public int getType() {
        return type;
    }

    @Override
    public String toString() {
        return "Types." + this.name();
    }
}
