# Imersão Full Stack & FullCycle 6.0 - Fincycle - Kafka e Kafka Connect

## Descrição

Repositório do Kafka e Kafka Connect

## Rodar a aplicação

### Configurar /etc/hosts

A comunicação entre as aplicações se dá de forma direta através da rede da máquina.
Para isto é necessário configurar um endereços que todos os containers Docker consigam acessar.

Acrescente no seu /etc/hosts (para Windows o caminho é C:\Windows\system32\drivers\etc\hosts):
```
127.0.0.1 host.docker.internal
```
Em todos os sistemas operacionais é necessário abrir o programa para editar o *hosts* como Administrator da máquina ou root.

Execute o comando:

```
docker-compose up
```

Espere um pouco antes de testar o Control Center no endereço: `http://localhost:9021`.
Configure um client no painel de developers do Twitter: [https://developer.twitter.com/en](https://developer.twitter.com/en), antes de criar um connector do Twitter no painel do Kafka Connect.

Crie o connector do Twitter, depois o do MongoDB (necessário iniciar o serviço do MongoDB do `docker-compose.yaml` do Nest.js).

Verifique se o tópico `tweets` foi criado com os novos tweets capturados (lembre-se de não deixar ativo muito tempo para testar, senão o Twitter pode bloquear).

Toda vez que parar os containers do Kafka, é necessário executar o comando `docker-compose down` antes.


### Para Windows 

Siga o guia rápido de instalação: [https://github.com/codeedu/wsl2-docker-quickstart](https://github.com/codeedu/wsl2-docker-quickstart) 
