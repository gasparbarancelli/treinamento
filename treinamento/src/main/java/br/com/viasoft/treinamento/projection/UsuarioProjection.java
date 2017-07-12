package br.com.viasoft.treinamento.projection;

import br.com.viasoft.treinamento.entity.Usuario;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.rest.core.config.Projection;

@Projection(name = "usuario", types = { Usuario.class })
public interface UsuarioProjection {

    @Value("#{target.nome} #{target.sobrenome}")
    String getNomeCompleto();

}