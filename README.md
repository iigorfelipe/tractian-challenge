# TRACTIAN Challenge

## Tecnologias Utilizadas

- TypeScript
- React - `Vite (react-ts)`

## Executando o Projeto Localmente
Clone o repositório para sua máquina:
```bash
git clone git@github.com:iigorfelipe/tractian-challenge.git
```

Entre na pasta do projeto:
```bash
cd tractian-challenge
```

Instale as dependências:
```bash
npm install
```
Execute o projeto:
```bash
npm run dev
```

## Descrição

- Este projeto é uma aplicação de visualização de árvore de ativos, desenvolvida como parte de um desafio frontend recebido da empresa TRACTIAN. A aplicação permite a visualização hierárquica dos ativos de uma empresa, incluindo componentes, ativos e localizações. A árvore suporta funcionalidades de filtragem e exibição responsiva para web e dispositivos móveis, além de possuir suporte a temas claro e escuro.


## Filtros:
- Pesquisa por Texto: Permite aos usuários buscar componentes, ativos e localizações específicas dentro da hierarquia de ativos.
- Sensores de Energia: Filtro para isolar sensores de energia na árvore.
- Status Crítico de Sensores: Filtro para identificar ativos com status crítico de sensores.

## Temas:
- Suporte a tema claro e escuro

## Responsividade:
- Interface adaptável para uso em dispositivos móveis e web

## Funcionalidade Extra:
- Inicialmente, implementei um backend local para permitir a criação, alteração e exclusão de dados, além da busca. Embora tenha decidido usar apenas a API fornecida, deixei a funcionalidade de adicionar novas empresas no frontend. Atualmente, essa funcionalidade não persiste os dados após a atualização da página, pois a chamada para criação no backend local foi descontinuada.

## Melhorias Futuras

Se houvesse mais tempo, as seguintes melhorias poderiam ser implementadas:

- Performance: Otimizações adicionais para melhorar o desempenho da aplicação, especialmente ao lidar com grandes volumes de dados na árvore de ativos.

- UI/UX: Refinamentos na interface de usuário para melhorar a experiência do usuário e a usabilidade.

- Funcionalidades Adicionais: Implementação de mais filtros e opções de personalização para os usuários.

- Refatoração: Estou ciente da quantidade de código repetido e planejo realizar uma refatoração para melhorar a organização e a manutenção do código. Inicialmente, meu foco foi terminar o projeto, mas pretendo otimizar o código em breve.


## API

A aplicação utiliza uma API fake para obter os dados das empresas, localizações e ativos. A API e seus endpoints são:

- API: `fake-api.tractian.com`

- `/companies`: Retorna todas as empresas
- `/companies/:companyId/locations`: Retorna todas as localizações de uma empresa
- `/companies/:companyId/assets`: Retorna todos os ativos de uma empresa

## Autor

- [Igor Felipe - Linkedin](https://www.linkedin.com/in/iigor-felipe/) 