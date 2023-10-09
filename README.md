# 🖥️ Aplicação Nodejs Consumindo API ara Calculo de Frete. 

## ⚙️ Sobre o Projeto
Este projeto tem origem de um exercicio que foi proposta pela escola de tecnologia Cubos Academy.
O objetivo desta aplicação é simular uma requisição de um cliente para a compra de um determinado produto,após escolha do produto o cliente tem a
 possibilidade de calcular para uma eventual compra sendo como parametro uma porcentagme sobre o valor do produto, sendo que a porcentagme varia de acordo com a residencia do eventual cliente.
A logica para calculo se baseia no estado de origem e uma porcentagme aplicado sobre o valor do produto ou seja para os estado da: "BA","SE","AL","PE" e "PB" o
calculo é 10% sobre o valor do produto, para os estados do "RJ" e "SP" o calculo é 15% sobre o valor do produto e para os demais estado do brasil é 12% sobre o valor do produto.

💡 Portanto a proposta desta aplicação é consumir uma API para implementar uma solução para calculo de frete, permitindo dinamismo a eventuais projeto.
##
## Caracteristicas de construção
Foi utilizado o ambiente de desenvolvimento integrado VSCODE, implementado os pacotes do Nodejs:
- [Express](https://www.npmjs.com/package/express) --> para configurar o ambiente do servidor.
- [utils-playground](https://www.npmjs.com/package/utils-playground) --> para buscar o cep a partir de um argumento passado.
A aplicação esta estruturada em diretorios com nomes intuitivos com seus respectivos arquivos para receber, tratar e retornar respota, trabalhando com funçoes assincronas, para  tratar de
exceção foi adicionato a estrutra de tratamento de erros TRY/CATCH, possibilidando que a API não trave.
### Um panorama dos diretorios e arquivos distribuidos:

![Captura de tela 2023-10-08 231754](https://github.com/LuizMoura-88/Nodejs_API_Calculo_de_Frete/assets/122941117/f7a09685-23bc-4b05-9f27-733e2ac45b42)
![Captura de tela 2023-10-08 232023](https://github.com/LuizMoura-88/Nodejs_API_Calculo_de_Frete/assets/122941117/424a0547-48ed-4671-a455-7acc00224dfc)

### 📱Experiencia do usuario.
O cliente tem acesso a três aos seguintes EndPoints:
 - Listar Produtos
 - Detalhar Produto
 - Calcular Frete de um Produto

Caso cliente venha a efetuar uma requisição indevida retornara um resposta, conforme preve esta API Rest.

Para iniciar o servidor apicar o comando:{npm run start}.
      
### 📝 Tecnologias utilizadas
<div style="display: inline_block"><br>
  <img  height="30" width ="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
  <img height="30" width ="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg" />
  <img height="30" width ="40"  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" />                          
</div>

##
