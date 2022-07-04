<h1> Serverless Challenge </h1>

Esse projeto tem como objetivo atender aos requisitos do desafio proposto no seguinte respositório: https://github.com/mvdornellas/serverless-challenge. Isto é, provisionar uma infraestrutura na AWS, em que se tenha uma lambda que sejá capaz de registrar em um banco de dados relacional ou não relacional, dados sobre funcionários de uma empresa.

<hr>

<h2> API </h2>

Criação de um novo funcionário: 
  - Método: POST
  - PATH: /employees/create
  - Params: nome: String, cargo: String, idade: Number

Leitura de um funcionário: 
  - Método: GET
  - PATH: /employees/read
  - Params: id

Atualização de um funcionário: 
  - Método: PUT
  - PATH: /employees/update
  - Params: id: Number, nome: String, cargo: String, idade: Number

Exclusão de um funcionário: 
  - Método: DELETE
  - PATH: /employees/delete
  - Params: id: Number

<h2> Recursos utilizados </h2>

Para esse projeto foram utilizados os recursos:

<h3> Clean Architectute </h3>

Proposta no próprio repositório do desafio, a Clean Architecture é uma arquiterura de desenvolvimendo de sofwares que tem como principal objetivo facilitar o entendimento do código através do conceito de clean code ao mesmo tempo que facilita nas futuras alterações do projeto por meio da desacoplação de funcionamentos, trazendo o o isolamento das regras de negócio e das regras da aplicação, sem dependencia do banco de dados, frameworks ou interfaces.

<br>
<img src="https://www.macoratti.net/20/10/aspc_cleanarq11.jpg">
<br>
<strong>Nota: </strong> Apesar de já conhecer seu conceito, decidi estudar mais sobre essa tecnologia antes de implementá-la no projeto. Confesso que fiquei admirada com as possibilidades que a mesma pode trazer, como a indepêndencia do banco de dados, interface e realização de testes, que custumam ser as partes mais complexas quando precisamos atualizar. Sempre gostei trabalhar em cima de arquiteturas de software e programação estruturada, além do interesse em POO e utilizar diariamente os modelos de MVC de forma direta.

<h3> Serverless </h3>
Também proposta no repositório do desafio com hospedagem via AWS Lambda, as aplicações serverless são implantadas em containers que são iniciados sob demanda e automaticamente quando chamados.
<br> 
<strong>Nota: </strong>Anteriormente, já havia trabalhado com serviços serverless, principalmente através do Cloudflare Worker principalmente por conta do meu primeiro projeto em JS, uma extensão web para usuários do Mercado Livre.

<h3> Jest </h3>
Como pedido no repositório, Jest foi utilizado para realizar a parte de testes do projeto.

<h3> Sequelize </h3>
O Sequelize é um ORM(Object/Relational Mapper) baseado em Promise que pode ser utilizado em Node.js. O principal motivo de sua escolhe é que eles operam como um agente de banco de dados, sendo possível através de pouquíssimas mudanças, utilizar o mesmo código para mais de um banco de dados. 



