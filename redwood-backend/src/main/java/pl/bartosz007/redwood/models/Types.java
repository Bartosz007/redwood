package pl.bartosz007.redwood.models;

public enum Types {
    ARTYKUŁ(0), KRZYŻÓWKA(1), PORADNIK(2);

    private int type;

    Types(int type) {
        this.type = type;
    }

    public int getType() {
        return type;
    }
}
