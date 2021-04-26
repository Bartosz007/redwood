package pl.bartosz007.redwood.models;

import java.io.Serializable;

public enum PermissionLevels implements Serializable {
    ZBANOWANY(0),
    USER(1),
    MODERATOR(2),
    ADMIN(3);

    private int level;

    PermissionLevels(int level) {
        this.level = level;
    }

    public int getLevel() {
        return level;
    }

    @Override
    public String toString() {
        return "PermissionLevels{" +
                "level=" + level +
                '}';
    }
}
