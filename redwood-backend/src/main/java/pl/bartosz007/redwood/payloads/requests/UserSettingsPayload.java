package pl.bartosz007.redwood.payloads.requests;

import lombok.Data;

@Data
public class UserSettingsPayload {
    private String email;
    private String fontColor;
    private String fgColor;
    private String bgColor;
}
