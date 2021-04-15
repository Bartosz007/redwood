package pl.bartosz007.redwood.models;

public enum PermissionLevels {
    ZBANOWANY(0),
    ODBANOWANY(1),
    USER(2),
    MODERATOR(3),
    ADMIN(4),
    HEAD_ADMIN(5);

    private int level;

    PermissionLevels(int level) {
        this.level = level;
    }

    public int getLevel() {
        return level;
    }
}
