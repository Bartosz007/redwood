package pl.bartosz007.redwood.models;

public enum Types {
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
