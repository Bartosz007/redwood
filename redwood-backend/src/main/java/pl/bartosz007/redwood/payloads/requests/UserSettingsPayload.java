package pl.bartosz007.redwood.payloads.requests;

import lombok.Data;

@Data
public class UserSettingsPayload {
    private long idUser;
    private String fontColor;
    private String fgColor;
    private String bgColor;
}
