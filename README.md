# Canil Público

Aplicativo React Native com Expo Router e React Native Paper para gestão do Canil Público.

## Requisitos

- Node.js v14.21.3
- npm v6.14.18

## Instalação

```bash
npm install
```

## Scripts principais

- `npm run start` - inicia o projeto com Expo Go.
- `npm run android` - compila e instala no Android.
- `npm run ios` - compila e instala no iOS.
- `npm run web` - abre o projeto no navegador.
- `npm run lint` - executa o ESLint.
- `npm run format` - formata o código com Prettier.
- `npm run typecheck` - roda o TypeScript no modo `--noEmit`.
- `npm run test` - executa a suíte de testes (Jest).

## Estrutura

A navegação é gerenciada pelo Expo Router na pasta `app/`. O estado de tema utiliza Zustand em `src/stores/useThemeStore.ts` e o React Native Paper oferece suporte a tema claro/escuro. A conexão SQLite está em `db/connection.ts` e o cliente HTTP base com Axios em `services/http.ts`.
