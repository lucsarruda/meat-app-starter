# Meat - Angular App Starter - [Demo](https://tiagoboeing.github.io/meat-app-starter/)

Esta é uma aplicação destinada a práticas do curso de Angular na Udemy. (https://www.udemy.com/angular-pt/)

<p>O primeiro acesso pode levar alguns segundos, já que o Heroku 'desliga' instâncias que ficam 30 minutos sem requisições. Front-end e back-end (API) estão em instâncias separadas, sendo assim a regra se aplica a ambos.</p>

> Backend no Heroku. Aguarde alguns segundos para a instância ser ativada!**

## Demo
Práticas do curso de Angular na Udemy
<img src="http://g.recordit.co/5aTVmS9ruU.gif"/>

# Rodando projeto
Tenha NodeJS, NPM (ou outro gerenciador de dependências) e Angular CLI instalados em seu computador:
- Execute `npm install`
- Execute `npm start`

## Single command 💪
Rode `npm start` na pasta do projeto e seja feliz! 😎

## Manualmente 😥

#### Frontend
Para rodar o frontend você pode utilizar:
- `npm start` : subirá o concurrently com todas as tarefas automatizadas;
- `ng serve` : do próprio Angular

#### Fake Backend (API)
Para a API, é possível rodar em escopo separado do frontend utilizando um dos comandos a seguir:
- Via Node com `node backend/dist/server`
- Com Nodemon (reload automático): `nodemon --watch backend backend/dist/server.js`
- Rodando JSON-Server via sintaxe original: `json-server --watch db.json`

#### Compilando typescript em tempo real
- Acesse a pasta contendo os arquivos Typescript;
- Rode o comando `tsc -w` ;
- Você verá os arquivos `.js` sendo gerados.

# Referências

#### Repositório fornecido inicialmente
https://github.com/cod3rcursos/meat-app-starter

#### Aplicação final gerada pelo instrutor
https://github.com/cod3rcursos/meat-app-final

#### Templates do curso
https://github.com/cod3rcursos/meat-app-template
