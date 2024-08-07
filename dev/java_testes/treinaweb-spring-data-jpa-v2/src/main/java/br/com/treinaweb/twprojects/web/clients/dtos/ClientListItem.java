package br.com.treinaweb.twprojects.web.clients.dtos;

import br.com.treinaweb.twprojects.core.models.Client;
import br.com.treinaweb.twprojects.core.utils.StringUtils;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ClientListItem {

    private Long id;

    private String name;

    private String phone;

    private String email;

    public String getPhone() {
        return StringUtils.formatPhone(phone);
    }

    public static ClientListItem of(Client client) {
        return ClientListItem.builder()
            .id(client.getId())
            .name(client.getName())
            .email(client.getEmail())
            .phone(client.getPhone())
            .build();
    }
    
}
