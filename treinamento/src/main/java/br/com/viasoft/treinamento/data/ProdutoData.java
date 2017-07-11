package br.com.viasoft.treinamento.data;

import br.com.viasoft.treinamento.entity.Produto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "objetos", path = "produto")
public interface ProdutoData extends JpaRepository<Produto, Integer> {
}
