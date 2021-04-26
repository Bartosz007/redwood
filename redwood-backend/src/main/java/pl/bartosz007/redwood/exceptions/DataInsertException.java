package pl.bartosz007.redwood.exceptions;

import java.sql.SQLException;

public class DataInsertException extends SQLException {
    public DataInsertException(String reason, Throwable cause) {
        super(reason, cause);
    }
}
