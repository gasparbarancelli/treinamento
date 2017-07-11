package br.com.viasoft.treinamento.config;

import br.com.viasoft.treinamento.entity.Produto;
import br.com.viasoft.treinamento.entity.Usuario;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestMvcConfiguration;

@Configuration
public class DataRestConfiguration extends RepositoryRestMvcConfiguration {

    @Override
    public RepositoryRestConfiguration config() {
        RepositoryRestConfiguration config = super.config();
        config.exposeIdsFor(Usuario.class, Produto.class);
        return config;
    }

}