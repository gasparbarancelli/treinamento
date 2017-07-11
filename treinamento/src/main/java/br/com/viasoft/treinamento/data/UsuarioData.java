package br.com.viasoft.treinamento.data;

import br.com.viasoft.treinamento.entity.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(collectionResourceRel = "objetos", path = "usuario")
public interface UsuarioData extends JpaRepository<Usuario, Integer> {

    List<Usuario> findByUsuario(@Param("usuario") String usuario);

    List<Usuario> findByUsuarioContaining(@Param("usuario") String usuario);

}
