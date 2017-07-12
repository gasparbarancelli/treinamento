package br.com.viasoft.treinamento.data;

import br.com.viasoft.treinamento.entity.Usuario;
//import br.com.viasoft.treinamento.projection.UsuarioProjection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;

import java.util.List;

@RepositoryRestResource(collectionResourceRel = "objetos", path = "usuario"/*, excerptProjection = UsuarioProjection.class*/)
public interface UsuarioData extends JpaRepository<Usuario, Integer> {

    @RestResource(exported = false)
    List<Usuario> findByUsuario(@Param("usuario") String usuario);

    @RestResource(path = "usuarioContaining", rel = "usuarioContaining")
    List<Usuario> findByUsuarioContaining(@Param("usuario") String usuario);

    @Query("select u from Usuario u where u.usuario = :usuario and u.id <> :id")
    List<Usuario> teste(@Param("usuario") String usuario, @Param("id") Integer id);

    @Query(value = "select u.* from usuario u where u.usuario = :usuario and u.id <> :id", nativeQuery = true)
    List<Usuario> testeNative(@Param("usuario") String usuario, @Param("id") Integer id);

}
