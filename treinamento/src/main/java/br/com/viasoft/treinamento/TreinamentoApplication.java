package br.com.viasoft.treinamento;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Import;
import springfox.documentation.spring.data.rest.configuration.SpringDataRestConfiguration;

@SpringBootApplication
@EnableEurekaClient
@Import({SpringDataRestConfiguration.class})
public class TreinamentoApplication {

	public static void main(String[] args) {
		SpringApplication.run(TreinamentoApplication.class, args);
	}

}
