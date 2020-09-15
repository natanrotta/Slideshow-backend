1. Configuração do ambiente
- Caso não tenha o node.js instalado na sua máquina, acesse o [link](https://nodejs.org/en/download/) e realiza o downlaod seguindo a documentação.
- Caso não tenha o yarn instalado na sua máquina, acesse o [link](https://classic.yarnpkg.com/en/docs/install/#windows-stable) e realiza o download seguindo a documentação.
- Caso não tenha o npm instalado na sua máquina, acesse o [link](https://nodejs.org/en/download/) e realiza o download seguindo a documentação.
- Não é necessário, mas caso queira realizar o download de um editor para a visualização do código fonte, recomendo o Visual Studio Code. [Download](https://code.visualstudio.com/download)
- Realizar o download do código fonte da aplicação, acessando o seguinte [repositório]().

2. Subindo aplicação
- Abrir o projeto backend dentro do VSCode, abrir o terminal e rodar o seguinte comando: **npm install**
- Abrir o projeto backend dentro do VSCode, abrir o terminal e rodar o seguinte comando: **yarn dev**

3. Aplicação
Aplicação resultante de um desafio proporcionado pela [Plathanus](plathanus.com.br). Esse desafio consiste em criar um projeto o qual permite o usuário a salvar imagens,
e a partir delas listar em forma de slideshow. 

A aplicação foi desenvolvida usando:
- Backend: Desenvolvido em Node.js.
- Database: Para a persistência dos dados, foi utilizado o MongoDB em conjunto com o Amazon S3. Dessa forma não é necessário configurar nenhum tipo de banco de dados local, eles estão na nuvem, só subir a aplicação que já funciona.