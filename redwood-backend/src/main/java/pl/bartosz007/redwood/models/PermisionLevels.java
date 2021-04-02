package pl.bartosz007.redwood.models;

public enum PermisionLevels {
    ZBANOWANY(0),
    ODBANOWANY(1),
    USER(2),
    MODERATOR(3),
    HEAD_MODERATOR(4),
    ADMIN(5),
    HEAD_ADMIN(6);

    private int persimionLevel;

    PermisionLevels(int persimionLevel) {
        this.persimionLevel = persimionLevel;
    }

    public int getPersimionLevel() {
        return persimionLevel;
    }
}
