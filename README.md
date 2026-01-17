# Teste Rota - Meu Sistema de Veículos 🚛

E aí, tudo certo? Esse aqui é o projeto que eu desenvolvi para o teste de desenvolvedor. Tentei caprichar o máximo que consegui no tempo que tive, focando em deixar o código limpo e a interface bonitinha para quem for usar. Usei React com TypeScript e Tailwind pra estilização.

## ✅ O que eu consegui fazer (Funcionalidades)

- **Tabela de Veículos:** Montei a listagem puxando os dados da API. Dá pra ver a placa, o número da frota e o modelo dos caminhões.
- **Filtros por Categoria:** Coloquei as opções de "Rastreados" e "Outros" ali em cima. Quando você clica, a lista atualiza sozinha.
- **Mapa com Google Maps:** Consegui integrar o mapa! Ele mostra os ícones onde os veículos estão. Se você clicar num ícone, abre um balãozinho com as informações dele.
- **Barra de Pesquisa:** Se digitar uma placa ou o número da frota, a lista já filtra na hora. Isso ajuda muito na hora de achar um veículo específico.
- **Paginação:** Como pode ter muito dado, fiz aquele esquema de passar as páginas de 10 em 10.
- **Cadastro (Modal):** Fiz uma janelinha que abre para cadastrar novos veículos, com validação nos campos (pra não deixar salvar nada vazio ou placa errada).

## 🤯 Onde eu tive mais dificuldade

- **Integração com o Mapas:** Confesso que apanhei um pouco para fazer os marcadores aparecerem no lugar certo e ajustar o zoom automático sempre que a lista mudava. O Google Maps tem muitos detalhes na documentação e demorei um pouquinho pra pegar o jeito.
- **TypeScript:** Como estou tentando usar tudo tipado direitinho, tive alguns erros chatos na hora de passar as informações da API para os componentes, mas no fim deu certo!
- **Ambiente (.env):** No começo esqueci de configurar a variável de ambiente e nada funcionava, fiquei um tempão achando que era erro no código até perceber que era só o Token que faltava.

## ⚠️ O que ainda falta (Pontos de melhoria)

- **Persistência no Cadastro:** O botão de "Salvar" no formulário de Novo Veículo ainda é "fake". Ele mostra o aviso de sucesso e limpa os campos, mas como ainda não tenho a rota de `POST` configurada, o dado não fica gravado no banco de verdade.
- **Responsividade no Mapa:** Em telas de celular muito pequenas, o mapa fica meio apertado. Eu queria ter tido mais tempo pra ajustar melhor o CSS pra mobile.
- **Movimentação ao vivo:** Por enquanto, os veículos só mudam de lugar se você atualizar a página. Seria legal fazer eles se mexerem em tempo real no futuro.

## 🛠️ Como rodar aí na sua máquina

1. Abre o terminal na pasta e instala as coisas: `npm install`
2. Cria o arquivo `.env` com a sua chave do Maps e o link da API.
3. Roda o comando: `npm run dev`

Espero que o projeto mostre um pouco do que eu já sei e da minha vontade de aprender mais! Valeu pela oportunidade! :)
